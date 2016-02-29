#pragma strict

var paddle1_1 : Transform;
var paddle1_2 : Transform;
var paddle1_3 : Transform;
var paddle1_4 : Transform;
var paddle1_5 : Transform;
var paddle2_1 : Transform;
var paddle2_2 : Transform;
var paddle2_3 : Transform;
var paddle2_4 : Transform;
var paddle2_5 : Transform;
private var RandomNumber : int;
public var paddledistance : int = 14;

function Start () {
    var player1 : Transform;
    var player2 : Transform;

    RandomNumber = Random.Range(1, 6);

    if(RandomNumber == 1) {player1 = Instantiate(paddle1_1, new Vector3(-paddledistance, 0, 0), paddle1_1.transform.rotation);} 
    else if (RandomNumber == 2){ player1 = Instantiate(paddle1_2, new Vector3(-paddledistance, 0, 0), paddle1_2.transform.rotation);}
    else if (RandomNumber == 3){ player1 = Instantiate(paddle1_3, new Vector3(-paddledistance, 0, 0), paddle1_3.transform.rotation);}
    else if (RandomNumber == 4){ player1 = Instantiate(paddle1_4, new Vector3(-paddledistance, 0, 0), paddle1_4.transform.rotation);}
    else if (RandomNumber == 5){ player1 = Instantiate(paddle1_5, new Vector3(-paddledistance, 0, 0), paddle1_5.transform.rotation);};


  player1.name = "Player1(Clone)";

  RandomNumber = Random.Range(1, 6);

  if(RandomNumber == 1){player2 = Instantiate(paddle2_1, new Vector3(paddledistance, 0, 0), paddle2_1.transform.rotation);} 
  else if (RandomNumber == 2) {player2 = Instantiate(paddle2_2, new Vector3(paddledistance, 0, 0), paddle2_2.transform.rotation);}
  else if (RandomNumber == 3) {player2 = Instantiate(paddle2_3, new Vector3(paddledistance, 0, 0), paddle2_3.transform.rotation);}
  else if (RandomNumber == 4) {player2 = Instantiate(paddle2_4, new Vector3(paddledistance, 0, 0), paddle2_4.transform.rotation);}
  else if (RandomNumber == 5) {player2 = Instantiate(paddle2_5, new Vector3(paddledistance, 0, 0), paddle2_5.transform.rotation);};
 

      player2.name = "Player2(Clone)";
  }
