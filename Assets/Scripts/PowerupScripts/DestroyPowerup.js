#pragma strict
public var DestroyDelay : int;

function Start () {
  Invoke("DestroyThis", DestroyDelay);
}

function DestroyThis () {
  Destroy(gameObject, 10);
  for (var c : Collider in gameObject.GetComponents(Collider)) {
    c.enabled = false;
  }
  for (var m : MeshRenderer in gameObject.GetComponents(MeshRenderer)) {
    m.enabled = false;
  }
}
