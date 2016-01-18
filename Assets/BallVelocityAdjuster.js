#pragma strict

public var ballspeed : float = 10;
public var sFactor : float = 10;

function Start () {
    // GIVE SOME STARTING SPEED
    GetComponent(Rigidbody).velocity.x = 10;
}

function Update () {

    // SET MINIMUM VELOCITIES
    var cve1 = GetComponent.<Rigidbody>().velocity;
    var tve1 = cve1.normalized * ballspeed;
    GetComponent.<Rigidbody>().velocity = Vector3.Lerp(cve1 , tve1, Time.deltaTime * sFactor);
}