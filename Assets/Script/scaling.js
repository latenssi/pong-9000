#pragma strict
public var startgrowtime : float;
public var startgrowmultiplier : float;

function Start () {

}

function Update () {

    // REDUCE TIME
    startgrowtime -= 0.017;

    if (startgrowtime > 0) {
        transform.localScale += new Vector3(0.1F, 0.1F, 0.1F) * startgrowmultiplier;


        // PASSIVE GROW
        //transform.localScale += new Vector3(0.01F, 0.01F, 0.01F) * startgrowmultiplier;
        
    };

    //transform.localScale += new Vector3(-0.1F, -0.1F, -0.1F);
}

function OnCollisionEnter(collision: Collision) {
    Debug.Log("ASD");
    if (collision.gameObject.tag == "Ball")
    {
        transform.localScale += new Vector3(-4F, -4F, -4F) * startgrowmultiplier;
    };

}