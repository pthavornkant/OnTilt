#pragma strict
public var Next : String;

function Start () {

}

function Update () {

}
function OnMouseDown () {

	if(this.gameObject.name=="Button-Replay"){
		Next="lv"+""+LevelScript.lastLevelPlayed.ToString("0");}

	if(this.gameObject.name=="Button-Next"){
		LevelScript.lastLevelPlayed=LevelScript.lastLevelPlayed+1;
		Next="lv"+""+LevelScript.lastLevelPlayed.ToString("0");
	}

	if(this.gameObject.name=="Button-Stage"){
		if(LevelScript.lastLevelPlayed>=400){
			Next="gLevels";
		if (Input.GetKeyDown(KeyCode.Escape)) {
					Application.LoadLevel("gLevels");
			}
		}
		if(LevelScript.lastLevelPlayed<400){
		Next="Levels";
		if (Input.GetKeyDown(KeyCode.Escape)) {
		Application.LoadLevel("Levels");
		}
		}
		LevelScript.lastLevelPlayed=0;
	}
 	 if (!Application.CanStreamedLevelBeLoaded(Next)) {
	      	if(LevelScript.lastLevelPlayed<400){
				Application.LoadLevel("Levels");
			}
			if(LevelScript.lastLevelPlayed>=400){
				Application.LoadLevel("gLevels");
			}
	  }
	
	Application.LoadLevel(Next);

}