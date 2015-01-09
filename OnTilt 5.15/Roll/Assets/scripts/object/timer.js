#pragma strict
@script ExecuteInEditMode()

private var timer:float=0;
private var starttime:float=0;

private var highscore:float;
private var HighScoreLocation:String;

var guiScore:GUIText;

function Start(){
	guiScore.text="Time: 0.00";	
	guiScore.fontSize=35;
	
	HighScoreLocation="lvhs"+LevelScript.lastLevelPlayed.ToString("0");
			//	PlayerPrefs.SetFloat(HighScoreLocation,600.00);
			//if doesn't exist, set it to 600
	if(!PlayerPrefs.HasKey(HighScoreLocation)){
			PlayerPrefs.SetFloat(HighScoreLocation,600.00);
	}
	if(PlayerPrefs.GetFloat(HighScoreLocation)==0.00f)
			PlayerPrefs.SetFloat(HighScoreLocation,600.00);
			
	highscore=PlayerPrefs.GetFloat(HighScoreLocation);
	print("highscore="+highscore);
}


protected var start:boolean=false;

function OnTriggerExit(other:Collider){
	if(start==false)
		starttime=Time.time;
	start=true;
	transform.position=Vector3(99,99,99);
}

function Update () {

	if(start==true){
		timer=Time.time-starttime;
		LevelScript.Endtime=timer;		
	}
				
	guiScore.text="Time: "+timer.ToString("0.00")+"s      "+"High Score:" + highscore.ToString("0.00")+"s" ;
}

