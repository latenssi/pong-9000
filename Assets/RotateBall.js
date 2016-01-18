#pragma strict
public var speed : int = 200;


function Update () {
    transform.Rotate(Vector3.right * Time.deltaTime * speed);
    transform.Rotate(Vector3.up * Time.deltaTime * speed);
}