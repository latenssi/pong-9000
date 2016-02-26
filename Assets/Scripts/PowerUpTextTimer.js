#pragma strict

var duration : int;

function Start () {
  Destroy(gameObject, duration);
}

function FixedUpdate() {
  gameObject.transform.position.y += 0.05;
  gameObject.transform.GetComponent(Renderer).material.color.a -= 0.01;
}
