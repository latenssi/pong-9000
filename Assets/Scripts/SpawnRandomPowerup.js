#pragma strict

var powerup1 : Transform;
var powerup2 : Transform;
var randomNumber : int;

function Start () {
	
	randomNumber = Random.Range(1, 3);
	if(randomNumber == 1){Instantiate(powerup1, gameObject.transform.position, Quaternion.identity);}
	else if(randomNumber == 2){Instantiate(powerup2, gameObject.transform.position, Quaternion.identity);}
	else {Debug.Log("INCORRECT NUMBER");}

	Destroy(gameObject, 0);
}
