#pragma strict
var prefabBlock : Transform;
var powerup : Transform;
var repeatTimeMax : int;
var repeatTimeMin : int;
private var nextBlock : int;
private var nextPowerup : int;

function Start () {
	nextBlock = Time.time + Random.Range(repeatTimeMin, repeatTimeMax);
	nextPowerup = Time.time + Random.Range(repeatTimeMin*3, repeatTimeMax*2);
}

function Update () {

if (Time.time > nextBlock)
	{
	nextBlock = Time.time + Random.Range(repeatTimeMin, repeatTimeMax);
	// CREATE BLOCK AT POSITION Random.Range(-10.0, 10.0)
	Instantiate(prefabBlock, gameObject.transform.position, Quaternion.identity);
	}
if (Time.time > nextPowerup)
	{
	nextPowerup = Time.time + Random.Range(repeatTimeMin*3, repeatTimeMax*2);
	// CREATE BLOCK AT POSITION Random.Range(-10.0, 10.0)
	Instantiate(powerup, gameObject.transform.position, Quaternion.identity);
	}
}
