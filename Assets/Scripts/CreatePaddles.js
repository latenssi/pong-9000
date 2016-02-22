#pragma strict

var paddle1_1 : Transform;
var paddle1_2 : Transform;
var paddle2_1 : Transform;
var paddle2_2 : Transform;
private var RandomNumber : int;

function Start () {
  var player1 : Transform;
  var player2 : Transform;

  RandomNumber = Random.Range(1, 3);

  if(RandomNumber == 1){
    player1 = Instantiate(paddle1_1, new Vector3(-14, 0, 0), paddle1_1.transform.rotation);
  } else if (RandomNumber == 2){
    player1 = Instantiate(paddle1_2, new Vector3(-14, 0, 0), paddle1_2.transform.rotation);
  }

  player1.name = "Player1(Clone)";

  RandomNumber = Random.Range(1, 3);

  if(RandomNumber == 1){
    player2 = Instantiate(paddle2_1, new Vector3(14, 0, 0), paddle2_1.transform.rotation);
  } else if (RandomNumber == 2){
    player2 = Instantiate(paddle2_2, new Vector3(14, 0, 0), paddle2_2.transform.rotation);
  }

  player2.name = "Player2(Clone)";
}
