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
	var paddle1Axis = player1paddle.GetComponent(PaddleVariables).VerticalAxis;
	var paddle2Axis = player2paddle.GetComponent(PaddleVariables).VerticalAxis;

	if (lastplayerhit == 1)
		{
		Debug.Log("ADDS");
		if(paddle2Axis == 1){
				player2paddle.transform.localScale.x *= 0.5;
		} else if(paddle2Axis == 3){
				player2paddle.transform.localScale.z *= 0.5;
		} else {
				player2paddle.transform.localScale.y *= 0.5;
		}
		yield StartCoroutine(resetsize(player2paddle, paddle2Axis));
		};
	if (lastplayerhit == 2)
		{
		Debug.Log("ASDS");
		if(paddle1Axis == 1){
				player1paddle.transform.localScale.x *= 0.5;
		} else if(paddle1Axis == 3){
				player1paddle.transform.localScale.z *= 0.5;
		} else {
				player1paddle.transform.localScale.y *= 0.5;
		}
		yield StartCoroutine(resetsize(player1paddle, paddle1Axis));
		};
	// transform.localScale = new Vector3(x, y, z);
	// transform.localScale[1] = y;

	// Invoke("functionname", seconds);
	}

function resetsize (paddle: GameObject, axis: int)
	{
	//Debug.Log("lolzfirst");
	yield WaitForSeconds (6);
	if(axis == 1){
			paddle.transform.localScale.x *= 2;
	} else if(axis == 3){
			paddle.transform.localScale.z *= 2;
	} else {
			paddle.transform.localScale.y *= 2;
	}
	//Debug.Log("lolz");
	}
