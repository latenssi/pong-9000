#pragma strict

var paddle1 : Transform;
var paddle2 : Transform;

function Start () {
  Instantiate(paddle1, new Vector3(-14, 0, 0), Quaternion.identity);
  Instantiate(paddle2, new Vector3(14, 0, 0), Quaternion.identity);
}
