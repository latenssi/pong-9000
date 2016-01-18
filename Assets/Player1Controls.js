#pragma strict

function Start () {

}

function Update () {

    if (Input.GetKey ("up")) 
        {
        gameObject.y++;
        }

    if (Input.GetKey ("down")) 
        {
        gameObject.y--;
        }

    if (Input.GetKey ("left")) 
        {
        gameObject.x--;
        }

    if (Input.GetKey ("right")) 
        {
        gameObject.x++;
        }
}