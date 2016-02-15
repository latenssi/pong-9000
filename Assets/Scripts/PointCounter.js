#pragma strict

public var player1Points: int = 0;
public var player2Points: int = 0;
public var winscreen : GameObject;
public var whoWon : GameObject;

private var gameEnded = false;
private var whoWonText : UnityEngine.UI.Text;

function Start () {
  whoWonText = whoWon.GetComponent(UnityEngine.UI.Text);
  whoWonText.text = "";
}

function endRound ()
{
  if (!gameEnded) {

    if (player1Points > player2Points) {
      // Player 1 won
      Debug.Log("PLAYER 1 WON");
      whoWonText.text = "LEFT WON";
    } else if (player1Points < player2Points) {
      // Player 2 won
      Debug.Log("PLAYER 2 WON");
      whoWonText.text = "RIGHT WON";
    } else {
      // Something weird happened
    }

    gameEnded = true;
    winscreen.SetActive(true);
    pauseGame();
  }
}

function pauseGame ()
{
  Time.timeScale = 0.0F;
}


function restartGame ()
{
  Time.timeScale = 1.0F;
  Application.LoadLevel(0);
}
