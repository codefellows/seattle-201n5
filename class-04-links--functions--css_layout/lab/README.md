# Assignment Overview: Lab for Class 4

## Extend and Refine

- You'll be making some edits your game. After each bit of work is completed, be sure to do an add-commit-push cycle (**a-c-p**) to place the code on GitHub and preserve a versioned history of your work.

- DON'T FORGET TO DO YOUR WORK ON BRANCHES! Push each new feature to GitHub when it is complete, do a Pull Request to merge the work into the master branch, and pull master before starting work on the next feature.

- Move the logic for all questions into functions: Today we learned about functions, and now we'll move the logic for the individual questions into separate functions, and call those functions to initiate the game.

- In its most basic sense, this is pretty simple and straightforward: 'wrap' the logic and variables for a given question with `function someFuncNameYouChoose() {` at the beginning, and add a closing curly brace `}` at the end. To make the function execute, just call it afterwards: `someFuncNameYouChoose();` After completing this step the game should behave exactly as it did before. **a-c-p**

- Stretch goal #1: For the five yes/no questions, your questions, the correct answers, and the two possible responses should be moved into separate arrays. (The same applies if you've added in any other pieces to the questions besides the most basic structure.) Once this is done you can replace that content in the functions by accessing the arrays. If you have already done this, but with a similar architecture, that is fine. **a-c-p**

- Stretch goal #2: depending upon time: If you have time, reduce the yes/no questions from five functions to one, and then use a 'for' loop to iterate through the arrays and call the function for each question.

### Deployment

We'll be deploying our finished About Me projects to GitHub Pages. This will make them real, live websites that people can visit. The process is simple:

- Finish all technical requirements and any other tweaks you want to make.
- Add-commit-push your working branch.
- Create a PR on GitHub and merge your final changes to the master branch.
- Pull master in your terminal so you have the final product saved to your local master branch.
- Checkout a new gh-pages branch. It must have the exact name `gh-pages`
- To deploy your site, push the gh-pages to GH.
- Verify that deployment was successful: go to your repo on GitHub and open the settings tab. Look for the GitHub Pages section, where you should see a message saying `Your site is published at http://<username>.github.io/<repo-name>` Follow that link and play through your game. Everything should be working correctly. If some part of your deployed page doesn't work, look for console messages or other errors, or consult an instructor.

### Technical Requirements

- All work should be completed on Git branches and merged to master by using a Pull Request on GitHub. If you work on stretch goals, use separate branches for the function-wrapping goal and each of the stretch goals.

- All logic for getting the username and running the quiz should be encapsulated in functions that are called to run the quiz. NO NAKED JS STATEMENTS except global variable declarations.

- Your finished product should be deployed to GH pages

### Submitting Your Assignment

- Submit the link to your deployed GH-pages site. It should look like `http://<username>.github.io/<repo-name>`
- Add a comment to this Canvas submission with answers to the following questions.
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
