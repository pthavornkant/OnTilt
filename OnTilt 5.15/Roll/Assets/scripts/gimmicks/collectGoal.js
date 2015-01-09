#pragma strict
private var highscore:float;
private var HighScoreLocation:String;
var Colornow:Color;
Colornow=this.gameObject.renderer.material.color;
function Start () {

this.gameObject.renderer.material.color = Color.grey;
}

function Update () {
if(collectTracker.doneCollecting == true){
	this.gameObject.renderer.material.color=Colornow;
}
}

function OnTriggerEnter (other : Collider) {
		if (other.name == "Marble")
		{
			if (collectTracker.doneCollecting == true)
			{
				
				HighScoreLocation="lvhs"+LevelScript.lastLevelPlayed.ToString("0");
			
			//if doesn't exist, set it to 600
			if(!PlayerPrefs.HasKey(HighScoreLocation)){
					PlayerPrefs.SetFloat(HighScoreLocation,600.00);
			}
			
			//get score for current level
			highscore=LevelScript.Endtime;
			print("highscore="+highscore);
			
			//if the time is lower than previous saved time, set time as high score
			if(highscore<PlayerPrefs.GetFloat(HighScoreLocation)){
			 	PlayerPrefs.SetFloat(HighScoreLocation,highscore);
			}		
				
				Application.LoadLevel("win");
			} 
			
				
		}
		
	}