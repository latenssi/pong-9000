#pragma strict

function Start () 
{
	
}

function Update () {
		if (Input.GetKey ("escape")) 
			{
			Application.LoadLevel("Start Menu");
			}
		}

function ExitGame ()
{
Application.LoadLevel("Start Menu");
}