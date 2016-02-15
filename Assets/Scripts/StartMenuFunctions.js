#pragma strict

public var levelToLoad : int;

function startgame ()
{
  // START THE GAME: LOAD LEVEL X
  Time.timeScale = 1.0F;
  Application.LoadLevel("LV1");
}

function exitgame ()
{
  Application.Quit();
}
