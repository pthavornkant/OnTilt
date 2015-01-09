#pragma strict
private var HighScoreLocation:String;
function Start () {

}
function OnMouseDown () {
	var i:int;
	for(i = 100; i<=800;i++){
		HighScoreLocation="lvhs"+i.ToString("0");
		PlayerPrefs.SetFloat(HighScoreLocation,600.00);
	}
	PlayerPrefs.SetFloat("gravity",2);
	PlayerPrefs.SetInt("maxlevel",8);
	PlayerPrefs.SetInt("maxglevel",8);
	Application.LoadLevel(0);

}
function Update () {

}