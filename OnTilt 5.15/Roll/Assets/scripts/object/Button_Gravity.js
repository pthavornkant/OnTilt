#pragma strict
private var temp:float;
private var gravity:float;
var guiGravity:GUIText;
function Start () {
	gravity=PlayerPrefs.GetFloat("gravity");
	guiGravity.text=gravity.ToString("0");
}

function Update () {
	
	
}
function OnMouseDown () {
	temp=PlayerPrefs.GetFloat("gravity");
	if (temp>5){
	temp=5;
	}
	
	if(this.gameObject.name=="Button-left-gravity"){
		if(temp > 1){
			gravity= temp-1;
			PlayerPrefs.SetFloat("gravity",gravity);
			guiGravity.text=gravity.ToString("0");
		}
	}
	if(this.gameObject.name=="Button-right-gravity"){
		if(temp < 10){
			gravity=temp+1;
			PlayerPrefs.SetFloat("gravity",gravity);
			guiGravity.text=gravity.ToString("0");
	}
	}
	
}