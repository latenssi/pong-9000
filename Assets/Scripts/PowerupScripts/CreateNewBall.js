#pragma strict
var ball : Transform;

function Start () {

}

function OnCollisionEnter (collision: Collision)
{
  Instantiate(ball, gameObject.transform.position, Quaternion.identity);
}
