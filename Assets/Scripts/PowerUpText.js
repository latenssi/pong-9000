#pragma strict

var powerupText : String;
var textObject : GameObject;

function OnCollisionEnter (collision: Collision) {
  var newText = Instantiate(textObject, gameObject.transform.position, Quaternion.identity);
  newText.GetComponent(TextMesh).text = powerupText;
}
