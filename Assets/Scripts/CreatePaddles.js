#pragma strict

var paddle1 : Transform;

function Start () {
  Instantiate(paddle1, new Vector3(-14, 0, 0), Quaternion.identity);
}
