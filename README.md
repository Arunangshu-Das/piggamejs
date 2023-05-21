# Dice Game

This is a simple dice game implemented using HTML, CSS, and JavaScript. It allows two players to take turns rolling a dice and accumulating points. The first player to reach a score of 20 wins the game.

## How to Play

1. Open the `index.html` file in a web browser to start the game.

2. The game starts with Player 1 (represented by the red background) being the active player.

3. Click the **Roll Dice** button to roll the dice. The number rolled will be displayed on the dice.

4. If a player rolls a 1, their current score will be reset to 0, and it will be the other player's turn.

5. If a player rolls a number other than 1, the number will be added to their current score.

6. The player can continue rolling the dice to accumulate points or choose to hold their current score.

7. Click the **Hold** button to add the current score to the player's total score. It will then be the other player's turn.

8. The first player to reach a total score of 20 or more will be declared the winner. Their section will be highlighted, and the game will end.

9. To start a new game, click the **New Game** button. It will reset all scores and restart the game.

## Code Overview

The code consists of HTML, CSS, and JavaScript sections.

- **HTML**: The HTML structure defines the layout of the game interface, including player sections, score displays, dice image, and buttons.

- **CSS**: The CSS file provides the styles and visual presentation of the game elements, including player colors, dice image styling, and button styles.

- **JavaScript**: The JavaScript code handles the game logic and user interactions. It includes event listeners for the buttons, dice rolling functionality, updating scores, switching players, and checking for a winner.

The game follows the following workflow:

1. The game starts with Player 1 as the active player, and both players' scores are set to 0.

2. Clicking the **Roll Dice** button generates a random number between 1 and 6, representing the dice roll. The dice image is updated accordingly.

3. If the rolled number is 1, the current score is reset to 0, and it becomes the other player's turn.

4. If the rolled number is not 1, the number is added to the current score of the active player, and the updated score is displayed.

5. Clicking the **Hold** button adds the current score to the total score of the active player. If the total score reaches 20 or more, the player wins the game.

6. The active player is then switched, and their current score is reset to 0.

7. Clicking the **New Game** button resets all scores, clears the winner styling, and starts a new game.

## Note

Feel free to modify the code or add additional features to enhance the game. You can customize the game rules, add animations, or improve the user interface according to your preferences.

---

Have fun playing the dice game!
