#pragma strict

public var levelToLoad : int;

function startgame ()
{
  // START THE GAME: LOAD LEVEL X
  //UnityEngine.SceneManagement.SceneManager.LoadScene(levelToLoad);
  Application.LoadLevel("LV1");
}
