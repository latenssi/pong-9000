#pragma strict
private var lastplayerhit : int;
private var player1paddle : GameObject;
private var player2paddle : GameObject;
private var duration : int;

function Start () 
{
player1paddle = gameObject.Find("Player1");
player2paddle = gameObject.Find("Player2");
}

function OnCollisionEnter (collision: Collision) 
	{
	lastplayerhit = collision.gameObject.GetComponent(BallVariables).lastPlayerHit;

	if (lastplayerhit == 1) 
		{
		Debug.Log("ADDS"); 
		player2paddle.transform.localScale = new Vector3(1, 3, 1); 
		yield StartCoroutine(resetsize());
		};
	if (lastplayerhit == 2) 
		{
		Debug.Log("ASDS"); 
		player1paddle.transform.localScale = new Vector3(1, 3, 1); 
		yield StartCoroutine(resetsize());
		};
	// transform.localScale = new Vector3(x, y, z);
	// transform.localScale[1] = y;

	// Invoke("functionname", seconds);
	}

function resetsize ()
	{
	Debug.Log("lolzfirst");
	yield WaitForSeconds (2);
	Debug.Log("lolz");
	}

