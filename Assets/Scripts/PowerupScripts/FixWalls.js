#pragma strict
private var lastplayerhit : int;
private var WallSpawnerRight : GameObject;
private var WallSpawnerLeft : GameObject;

function Start () {
WallSpawnerRight = gameObject.Find("WallSpawnerRight");
WallSpawnerLeft = gameObject.Find("WallSpawnerLeft");
}

function OnCollisionEnter (collision: Collision) {
  lastplayerhit = collision.gameObject.GetComponent(BallVariables).lastPlayerHit;

	if (lastplayerhit == 1)
		{
		Debug.Log("FIX RIGHT WALL");
		WallSpawnerRight.GetComponent(CreateWall).CreateWall();
		};
	if (lastplayerhit == 2)
		{
		Debug.Log("FIX LEFT WALL");
		WallSpawnerLeft.GetComponent(CreateWall).CreateWall();
		};
}
