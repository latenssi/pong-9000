#pragma strict

public var damage : int = 1;
public var lastPlayerHit : int = 0;

    function OnCollisionEnter(collision: Collision) {
        if (collision.gameObject.tag == "Player")
        {
            Debug.Log("PLAYER HIT");

            // CHECK WHICH PLAYER
            if(gameObject.transform.position.x < 0){lastPlayerHit = 1;} else {lastPlayerHit = 2;}

        }
    }
