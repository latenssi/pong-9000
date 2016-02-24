#pragma strict
private var lastplayerhit : int;
private var player1Timer : ReverseMovementTimer;
private var player2Timer : ReverseMovementTimer;
public var powerUpDuration : int; // Seconds

class ReverseMovementTimer extends System.ValueType {
  var endtime : float;
  var movement : PaddleMovement;
  var reversed : boolean;

  function ReverseMovementTimer(paddle : GameObject) {
    this.movement = paddle.GetComponent(PaddleMovement);
    this.reversed = false;
  }

  function start(duration : int) {
    this.endtime = Time.time + duration;
    if (!this.reversed) {
      this.reversed = true;
      this.movement.setSpeed(-this.movement.getSpeed());
    }
  }

  function stop() {
    if (this.reversed) {
      this.reversed = false;
      this.movement.setSpeed(-this.movement.getSpeed());
    }
  }
}

function Start () {
  //powerUpDuration = 10;
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

  if (player1Timer.reversed && (player1Timer.endtime - now) <= 0) {
    player1Timer.stop();
  }
  if (player2Timer.reversed && (player2Timer.endtime - now) <= 0) {
    player2Timer.stop();
  }
}
