#pragma strict

public var speed : int;

function Update () {

    if (Input.GetKey ("up")) 
        {
        transform.Translate(Vector2.up * Time.deltaTime * speed);
    }

    if (Input.GetKey ("down")) 
    {
        transform.Translate(Vector2.down * Time.deltaTime * speed);
    }

    if (Input.GetKey ("left")) 
    {
        transform.Translate(Vector2.left * Time.deltaTime * speed);
    }

    if (Input.GetKey ("right")) 
    {
        transform.Translate(Vector2.right * Time.deltaTime * speed);
    }

}