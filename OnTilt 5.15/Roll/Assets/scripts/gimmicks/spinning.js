#pragma strict

public var speed : double;

function Start () {

}

function OnTriggerEnter (other : Collider) {
	if (other.name == "Marble")
		{
		collectTracker.colcount += 1;
		Destroy(this.gameObject);
	}
}
function Update () {
	transform.Rotate(-Vector3.up * speed * Time.deltaTime);
}