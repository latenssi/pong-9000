#pragma strict
private var lastplayerhit : int;
private var player1Timer : ReverseMovementTimer;
private var player2Timer : ReverseMovementTimer;
private var powerUpDuration : int; // Seconds

class ReverseMovementTimer extends System.ValueType {
  var endtime : float;
  var movement : PaddleMovement;

  function ReverseMovementTimer(paddle : GameObject) {
    this.movement = paddle.GetComponent(PaddleMovement);
  }

  function start(duration : int) {
    this.endtime = Time.time + duration;
    Debug.Log(this.movement.getSpeed());
  }
}

function Start () {
  powerUpDuration = 10;
  player1Timer = new ReverseMovementTimer(gameObject.Find("Player1(Clone)"));
  player2Timer = new ReverseMovementTimer(gameObject.Find("Player2(Clone)"));
}

function OnCollisionEnter (collision : Collision) {
  lastplayerhit = collision.gameObject.GetComponent(BallVariables).lastPlayerHit;

	if (lastplayerhit == 1) {
		Debug.Log("POWER UP: Reverse player 2 paddle movement");
    player2Timer.start(powerUpDuration);
	}
  else if (lastplayerhit == 2) {
		Debug.Log("POWER UP: Reverse player 1 paddle movement");
    player1Timer.start(powerUpDuration);
	};
}

function Update() {
  var now = Time.time;
  var time1Left = player1Timer.endtime - now;
  var time2Left = player2Timer.endtime - now;
  if (time1Left > 0) {Debug.Log("Player 1 reverse movement timeleft: " + time1Left);}
  if (time2Left > 0) {Debug.Log("Player 2 reverse movement timeleft: " + time2Left);}
}
