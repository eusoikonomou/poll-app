Poll-App
=======

This is a simple SPA which enables the user to create a poll by providing a question and a set of possible answer (maximum 10 options).

You can view it @https://eusoikonomou.github.io/poll-app/!

# Usage
The poll application is used in the following manner:
- First you must input a poll question in the first input field.
- A set of possible answers are provided bellow the poll question by inserting the answer in the field and pressing the add button.
- As soon as the answer is provided you can remove it by pressing the x button next to the input field.
- In order to enable voting you must first lock the poll by pressing the lock icon next to the poll question field.
- The minimum number of possible answers required to lock the poll is 2. The range of the number of possible answers is [2 - 10].
- When the poll is locked it can no longer be edited and the vote section of the application (middle) is enabled.
- You can change the poll by pressing the Reset button which completely cleans the state of the poll.
- In order to vote you must first select the answer you wish to vote and then press on the Vote button bellow the possible answers in the middle section.
- With each vote you can see a bar chart on the third and final section of the application picturing the count of each answer's vote.