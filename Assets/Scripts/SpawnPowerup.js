#pragma strict
var powerup1 : Transform;
var powerup2 : Transform;
var powerup3 : Transform;
var powerup1rarity : int;
var powerup2rarity : int;
var powerup3rarity : int;
public var repeatTimeMin : int;
public var repeatTimeMax : int;
private var nextPowerup : int;
private var randomNumber : int;

function Start () {
  nextPowerup = Time.time + Random.Range(repeatTimeMin, repeatTimeMax);
}

function Update () {
  if (Time.time > nextPowerup)
  	{
  	nextPowerup = Time.time + Random.Range(repeatTimeMin, repeatTimeMax);
  	// CREATE BLOCK AT POSITION Random.Range(-10.0, 10.0)
    randomNumber = Random.Range(1, powerup1rarity + powerup2rarity + powerup3rarity + 1);
    if(randomNumber <= powerup1rarity)
    {Instantiate(powerup1, gameObject.transform.position, powerup1.transform.rotation);}

    else if(randomNumber > powerup1rarity && randomNumber <= powerup1rarity + powerup2rarity)
    {Instantiate(powerup2, gameObject.transform.position, powerup2.transform.rotation);}

    else if (randomNumber > powerup1rarity + powerup2rarity && powerup1rarity + powerup2rarity + powerup3rarity)
    {Instantiate(powerup3, gameObject.transform.position, powerup3.transform.rotation);}

    else {Debug.Log("INCORRECT NUMBER");}
  	}
}
