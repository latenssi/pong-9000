﻿#pragma strict

function OnCollisionEnter(collision: Collision) {
    if (collision.gameObject.tag == 'Ball')
        DestroyThis();
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
