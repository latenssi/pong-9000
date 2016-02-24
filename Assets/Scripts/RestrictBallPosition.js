#pragma strict

public var maxX : float;
public var maxY : float;
public var ball : GameObject;
private var pointhandler : GameObject;
private var rb : Rigidbody;
private var pointCounter : PointCounter;

function Start() {
  //ball = GameObject.Find("Ball");
  pointhandler = GameObject.Find("PointHandler");
  rb = GetComponent(Rigidbody);
  pointCounter = pointhandler.GetComponent(PointCounter);
}

function FixedUpdate () {
  var positionX = transform.position.x;
  var positionY = transform.position.y;

  if (Mathf.Abs(positionX) >= maxX) {
      // CHECK WHICH END BALL IS IN
      if (gameObject.transform.position.x < 0) {
        Debug.Log("PLAYER 2 POINT");
        pointCounter.player2Points++;
      }
      else {
        Debug.Log("PLAYER 1 POINT");
        pointCounter.player1Points++;
      };

      // RESET BALL AND WALLS
      pointCounter.endRound();
  }

  if (Mathf.Abs(positionY) >= maxY) {
    Debug.Log("OVER BOARD");
    rb.velocity.y = rb.velocity.y * -1;
    gameObject.transform.position.y = (positionY / Mathf.Abs(positionY)) * maxY;
  }
}
