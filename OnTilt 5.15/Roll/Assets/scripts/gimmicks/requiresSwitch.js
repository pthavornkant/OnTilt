#pragma strict

static var activated = true;

function Start () {

}

function Update () {

	if (!activated)
	{
		this.gameObject.renderer.material.color = Color.red;
		breakThis();
	}

}

function breakThis() {
		yield WaitForSeconds(1.25);
    	Destroy(this.gameObject);
}

function Awake() {
	activated = true;
}