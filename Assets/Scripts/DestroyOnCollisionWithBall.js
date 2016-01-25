#pragma strict

function OnCollisionEnter(collision: Collision)
	{
	// CHECK COLLISION OBJECT TAG
	if (collision.gameObject.tag == 'Ball') {Destroy(gameObject, 0);};
	}
