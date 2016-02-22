#pragma strict

public var prefab: Transform;

function Start () {

  CreateWall();

}

function Update () {

}

function CreateWall(){
  for (var i = 0; i < 20; i++)
   {
   // CREATE PREFAB, POSITION Y DECREASED
      //Instantiate(prefab, gameObject.transform.position.y - 1 * i, gameObject.transform.rotation);
      Instantiate(prefab, new Vector3(gameObject.transform.position.x, gameObject.transform.position.y + i * -1, gameObject.transform.position.z), Quaternion.identity);
   }
}
