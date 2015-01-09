#pragma strict

public var durability : int;
public var destBlocks: GameObject;

function Start () {

}

function Update () {
	
	if (durability >= 3)
		{
			this.gameObject.renderer.material.color = Color.grey;
		}
	if (durability == 2)
		{
			this.gameObject.renderer.material.color = Color.yellow;
		}

	if (durability == 1)
		{
			this.gameObject.renderer.material.color = Color.red;
		}

	if (durability == 0)
		{
			Instantiate(destBlocks, this.transform.position, this.transform.rotation);
			wait();
			Destroy(this.gameObject);
		}
		
	if(Input.GetKey(KeyCode.P))
    {
        Instantiate(destBlocks, transform.position, transform.rotation);
        Destroy(this.gameObject);
    }
}

function OnCollisionEnter (collision : Collision) {
		//if (collision.name == "Marble")
		//{
			durability = durability-1;
		//}
		
	}
	
	function wait() {
		yield WaitForSeconds(1.0);
	}