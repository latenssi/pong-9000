#pragma strict
public var speed : int;

function Update () {

    if (Input.GetKey ("w")) 
    {
        transform.Translate(Vector2.up * Time.deltaTime * speed);
    }

    if (Input.GetKey ("s")) 
    {
        transform.Translate(Vector2.down * Time.deltaTime * speed);
    }

    if (Input.GetKey ("a")) 
    {
        transform.Translate(Vector2.left * Time.deltaTime * speed);
    }

    if (Input.GetKey ("d")) 
    {
        transform.Translate(Vector2.right * Time.deltaTime * speed);
    }

}