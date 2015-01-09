#pragma strict

public var Next : int;
var guiScore:GUIText;
private var time:float;

function Start () {
	time=600.0;
	var key:String="lvhs"+Next;
	if(PlayerPrefs.HasKey(key)){
		time=PlayerPrefs.GetFloat(key);}
	guiScore.text="Best Time:"+time.ToString("0.00");
	
}

function Update () {

}
function OnMouseDown () {	
	Application.LoadLevel("lv"+Next.ToString("0"));
}