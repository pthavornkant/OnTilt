#pragma strict

function Start () {

}
function OnTriggerEnter (other : Collider) {
		if (other.name == "Marble")
		{
			Application.LoadLevel("fail");
		}
	}
function Update () {

}