#pragma strict

public var minimumVelocity : int;
public var maximumVelocity : int;

private var velocityTreshold : float;
private var rb : Rigidbody;

function Start() {
    rb = GetComponent(Rigidbody);
    velocityTreshold = minimumVelocity / 4;
    
    // GIVE SOME STARTING SPEED
    rb.AddForce(minimumVelocity, 0, 0);
}

function FixedUpdate() {
    var velX = Mathf.Abs(rb.velocity.x);
    var mag = rb.velocity.magnitude;
    var norm = rb.velocity.normalized;
    
    if (mag < minimumVelocity)
        rb.velocity = norm * minimumVelocity;

    if (mag > maximumVelocity)
        rb.velocity = norm * maximumVelocity;
            
    if (velX < velocityTreshold && velX > 0)
        rb.velocity.x = (norm * minimumVelocity).x;
}