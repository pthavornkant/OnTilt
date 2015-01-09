#pragma strict
private var temp:float;
private var currentPosition:Vector3;
function Start () {

}

function Update () {
	currentPosition = transform.TransformPoint(Vector3.zero); 
	if(temp!=PlayerPrefs.GetInt("glevel")){
	temp= PlayerPrefs.GetInt("glevel");
	//print(temp);
	
	}
	if(currentPosition.x!=-(temp-1)){
	currentPosition.x=-(temp-1);
	transform.position=currentPosition;
	//print("position.x="+currentPosition.x);
	}
	
		
}