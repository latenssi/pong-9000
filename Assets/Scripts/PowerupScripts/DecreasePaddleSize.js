#pragma strict
private var lastplayerhit : int;
private var player1paddle : GameObject;
private var player2paddle : GameObject;
private var duration : int;

function Start ()
{
player1paddle = gameObject.Find("Player1(Clone)");
player2paddle = gameObject.Find("Player2(Clone)");
}

function OnCollisionEnter (collision: Collision)
	{
	lastplayerhit = collision.gameObject.GetComponent(BallVariables).lastPlayerHit;

	if (lastplayerhit == 1)
		{
		Debug.Log("ADDS");
		player2paddle.transform.localScale.y = 3;
		yield StartCoroutine(resetsize(player2paddle));
		};
	if (lastplayerhit == 2)
		{
		Debug.Log("ASDS");
		player1paddle.transform.localScale.y = 3;
		yield StartCoroutine(resetsize(player1paddle));
		};
	// transform.localScale = new Vector3(x, y, z);
	// transform.localScale[1] = y;

	// Invoke("functionname", seconds);
	}

function resetsize (paddle: GameObject)
	{
	Debug.Log("lolzfirst");
	yield WaitForSeconds (6);
	paddle.transform.localScale.y = 5;
	Debug.Log("lolz");
	}
