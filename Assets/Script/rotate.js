#pragma strict

public var direction : int = 0;
public var speed : float = 0.2;
public var relative = true;


function Update () {

    //gameObject.transform.rotation = Vector3(0.2f, 0, 0);
    //transform.Rotate(Vector3.up * Time.deltaTime * speed);

    if (relative)
    {
        if (direction == 0) {transform.Rotate(Vector3.up * Time.deltaTime * speed, Space.World);};
        if (direction == 1) {transform.Rotate(Vector3.right * Time.deltaTime * speed, Space.World);};
        if (direction == 2) {transform.Rotate(Vector3.forward * Time.deltaTime * speed, Space.World);};
    };

    if (!relative)
    {
        if (direction == 0) {transform.Rotate(Vector3.up * Time.deltaTime * speed);};
        if (direction == 1) {transform.Rotate(Vector3.right * Time.deltaTime * speed);};
        if (direction == 2) {transform.Rotate(Vector3.forward * Time.deltaTime * speed);};
    };
}