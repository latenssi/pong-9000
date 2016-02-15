#pragma strict

    public var health = 1;
    private var ball : GameObject;

    function Start ()
        {
        ball = GameObject.Find("Ball");
        //Debug.Log(ball);
        }

    function OnCollisionEnter(collision: Collision) {
        if (collision.gameObject.tag == 'Ball')
        {
            Debug.Log("WALL HIT");

            // DEDUCT HEALTH
            health -= ball.gameObject.GetComponent(BallVariables).damage;

            // DESTROY IF 0
            if (health <= 0) {Destroy(gameObject, 0);} else {gameObject.GetComponent.<Renderer>().material.color = Color.red;};
        }
    }