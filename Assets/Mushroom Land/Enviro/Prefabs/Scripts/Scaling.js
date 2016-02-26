#pragma strict
public var startgrowtime : float;


function Start () {

}

function Update () {

    while (Time.time <= startgrowtime) {
        transform.localScale += new Vector3(0.1F, 0.1F, 0.1F);
    };

    //transform.localScale += new Vector3(-0.1F, -0.1F, -0.1F);
}