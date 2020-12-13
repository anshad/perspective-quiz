# Perspective Quiz

Perspective is a 7 minute test that determines each team member's [Myers-Briggs Type Indicator](https://www.mindfulnessmuse.com/individual-differences/understanding-myers-briggs-type-indicator) (MBTI). Understanding the personality breakdown of each team member allows us to provide more insights to teams about why they are having a particular problem.

## Running the app without docker

Clone the repo and chnage directory to it.

### Prerequisite

- PHP >= 7.4
- MySQL
- Composer
- Node & NPM

### Steps

- Change directory to API - `cd api`
- Install laravel vendor dependencies - `composer install`
- Create env file - `cp .env.example .env`(and update an empty db details)
- Generate app key - `php artisan key:generate`
- Migrate database schema - `php artisan migrate`
- Import Data - `php artisan db:seed`
- Run the API - `php artisan serve`
- Change direcotory back - `cd ..`
- Chnage directory to app - `cd app`
- Install node package dependencies - `npm install`
- Run the app - `npm run start`

## Calculating the Individual's MBTI

We will be calculating which "end" of the 4 dimensions the user's answers put them in.

- Refer to the provided questions list that used to display the 10 questions
  - As noted above, capture their response as an integer score from 1–7.
  - If the user ranks a 1, that means the question doesn't resonate with them at all
  - If the user ranks a 7, that means the question resonates with them fully
  - If the user ranks a 4, that means the resonance was neutral
- Like a real MBTI, this quiz produces a result in four "dimensions" :
  - EI - Extraversion (E) or Introversion (I)
  - SN - Sensing (S) or Intuition (N)
  - TF - Thinking (T) or Feeling (F)
  - JP - Judging (J) or Perceiving (P)
- Each question contributes to the user's result in **one** particular dimension
  - The dimension for each question is given in the 'Dimension' column on the list
  - The 'Meaning' column communicates: "When the user answers positively to that question, which _**end**_ of the dimension does that mean they lean toward?"
  - The 'Direction' column is used to combine different questions of the same dimension into a single score for that dimension.
    - The phrasing of the question affects which "end" of the dimention a high score supports.
    - For example, there are two `EI` questions:
      - "You find it takes effort to introduce yourself to other people": a low score is an `E` and a high score is an `I`. But on the other hand,
      - "You get energized going to social events that involve many interactions": a low score is an `I` and a high score is an `E`.
      - The 'Direction' column is an indicator of whether the score for that question needs to be reversed when combining the different questions for a particular dimension into a combined score.
- The end result for MBTI is a set of 4-letters that summarize their tendency in each of the 4 dimensions
  - For each dimension, determine which end of the dimension — which letter — they lean toward. The just combine the 4 letters.
    - For example, if a user's answers fall on the side of...
      - Extraversion (E) in the Extraversion/Introversion (E/I) Dimension
      - Intuition (N) in the Sensing/Intuition (S/N) Dimension
      - Thinking (T) in the Thinking/Feeling (T/F) Dimension
      - Perceiving (P) in the Judging/Perceiving (J/P) Dimension
    - ... then app would present their MBTI result as: "ENTP"
  - If a user's responses to a dimension are perfectly balanced (they don't lean more to one side or another) the algorithm should default to the first (left) letter of each pair.

Note: This is an _extremely_ watered down version of a MBTI test; it does not ask enough questions to give an accurate result.

## MBTI Test data

### Questions

| Question                                                                                | Dimension | Direction | Meaning |
| --------------------------------------------------------------------------------------- | --------- | --------- | ------- |
| You find it takes effort to introduce yourself to other people.                         | EI        | 1         | I       |
| You consider yourself more practical than creative.                                     | SN        | -1        | S       |
| Winning a debate matters less to you than making sure no one gets upset.                | TF        | 1         | F       |
| You get energized going to social events that involve many interactions.                | EI        | -1        | E       |
| You often spend time exploring unrealistic and impractical yet intriguing ideas.        | SN        | 1         | N       |
| Deadlines seem to you to be of relative rather than absolute importance.                | JP        | 1         | P       |
| Logic is usually more important than heart when it comes to making important decisions. | TF        | -1        | T       |
| Your home and work environments are quite tidy.                                         | JP        | -1        | J       |
| You do not mind being at the center of attention.                                       | EI        | -1        | E       |
| Keeping your options open is more important than having a to-do list.                   | JP        | 1         | P       |

### Test cases

|             | Test Case A | Test Case B | Test Case C | Test Case D | Test Case E | Test Case F | Test Case G |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Question 1  | 4           | 1           | 3           | 3           | 4           | 1           | 7           |
| Question 2  | 3           | 5           | 2           | 4           | 4           | 1           | 7           |
| Question 3  | 1           | 4           | 6           | 7           | 4           | 1           | 7           |
| Question 4  | 6           | 6           | 1           | 1           | 4           | 1           | 7           |
| Question 5  | 7           | 5           | 7           | 2           | 4           | 1           | 7           |
| Question 6  | 3           | 2           | 3           | 5           | 4           | 1           | 7           |
| Question 7  | 5           | 6           | 2           | 4           | 4           | 1           | 7           |
| Question 8  | 3           | 3           | 5           | 3           | 4           | 1           | 7           |
| Question 9  | 6           | 3           | 2           | 2           | 4           | 1           | 7           |
| Question 10 | 6           | 2           | 7           | 6           | 4           | 1           | 7           |
| Result:     | ENTP        | ESTJ        | INFP        | ISFP        | ESTJ        | ISTJ        | ESTP        |

### Technology Stack

- TypeScript, SASS
- React, Redux, Redux Saga
- Laravel, MySQL

### TODO

- Error handling
- Back-end Validation
- Dockerization
- Unit Tests & Code Coverage
- Linting
- TypeScript interfaces
