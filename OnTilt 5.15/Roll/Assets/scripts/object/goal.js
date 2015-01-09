#pragma strict
private var highscore:float;
private var HighScoreLocation:String;

function Start () {

}
function OnTriggerEnter (other : Collider) {
		
		if (other.name == "Marble")
		{
			//locate highscore for current level
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
function Update () {

}