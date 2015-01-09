#pragma strict

public var emittedForce : float;
public var direction : int;

function Start () {

}

function Update () {

}

function OnTriggerStay (other : Collider)
{
	if (other.name == "Marble")
	{
		if (direction == 1) //1 = Right
		{
	    	other.rigidbody.AddForce(Vector3.right * emittedForce, ForceMode.Force);
	    }
	    
	    if (direction == 2) //2 = Left
		{
	    	other.rigidbody.AddForce(-Vector3.right * emittedForce, ForceMode.Force);
	    }
	    
	    if (direction == 3) //3 = Up
		{
	    	other.rigidbody.AddForce(Vector3.forward * emittedForce, ForceMode.Force);
	    }
	    
	    if (direction == 4) //4 = Down
		{
	    	other.rigidbody.AddForce(Vector3.back * emittedForce, ForceMode.Force);
	    }
	}
}
