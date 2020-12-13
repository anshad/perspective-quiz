<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\User;
use App\Models\Result;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $email = $request->email;
        if (isset($email)) {
            // validate
            $user = User::where('email', $email)->first();
            if (!$user) {
                $user = User::create(['email' => $email]);
            }

            $answerArray = [];

            foreach ($request->answers as $answers) {
                foreach ($answers as $key => $value) {
                    $question_id = str_replace('question-', '', $key);
                    $answerArray[$question_id] = $value;
                    $answer = Answer::where([
                        ['user_id', '=', $user->id],
                        ['question_id', '=', $question_id],
                    ])->first();

                    if (!$answer) {
                        // insert answer
                        Answer::create([
                            'question_id' => $question_id,
                            'user_id' => $user->id,
                            'answer' => $value,
                        ]);
                    } else {
                        // update answer
                        $answer->answer = $value;
                        $answer->save();
                    }
                }
            }

            $calculatedResult = $this->calculateResult($answerArray);

            // save/update result
            $result = Result::where('user_id', $user->id)->first();
            if (!$result) {
                $result = new Result();
            }
            $result->user_id = $user->id;
            $result->summary = $calculatedResult['summary'];
            $result->result = $calculatedResult['result'];
            $result->save();

            return $result;
        } else {
            // return error
        }
    }

    public function result($id)
    {
        $result = Result::find($id);
        if ($result) {
            return $result;
        } else {
            return response()->json(['error' => 'No result found!']);
        }
    }

    private function calculateResult($answerArray)
    {
        $dimensions = [
            'EI' => ['value' => 0.0, 'count' => 0],
            'SN' => ['value' => 0.0, 'count' => 0],
            'TF' => ['value' => 0.0, 'count' => 0],
            'JP' => ['value' => 0.0, 'count' => 0],
        ];

        foreach ($answerArray as $questionId => $answer) {
            $question = Question::find($questionId);

            $answerShift = $answer - 4.0;
            $answer = $answerShift * $question->direction;

            $dimensions[$question->dimension]['value'] += $answer;
            $dimensions[$question->dimension]['count'] += 1;
        }

        $summary = [];
        $result = [];

        foreach ($dimensions as $dimensionKey => $dimension) {
            $value = $dimension['value'];
            $count = $dimension['count'];

            $summary[$dimensionKey] = $dimensionKey[$value <= 0 ? 0 : 1];

            $points = $count * 3.0;
            $range = $points * 2.0;

            $result[$dimensionKey] =
                (int) ((($value + $points) / $range) * 100.0);
        }

        return [
            'summary' => implode('', $summary),
            'result' => $result,
        ];
    }
}
