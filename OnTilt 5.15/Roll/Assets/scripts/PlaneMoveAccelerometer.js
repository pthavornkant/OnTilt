#pragma strict
@script ExecuteInEditMode()
public var currentLevel:int;
var pauseGUI:GUITexture;
pauseGUI.enabled=false;

private var dir : Vector3 =Vector3(0,0,0);

function Start () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	LevelScript.lastLevelPlayed=currentLevel;
	LevelScript.paused=false;
}



function Update () {	

if (Application.platform == RuntimePlatform.Android){
		if (Input.GetKeyDown(KeyCode.Escape)) 
			{
			if(currentLevel<400) {
				Application.LoadLevel("Levels"); 
			}
			else{
				Application.LoadLevel("gLevels");
			}
			}
		
		for (var i = 0; i < Input.touchCount; ++i) {
			if (Input.GetTouch(i).phase == TouchPhase.Began) {	
		//if(Input.GetKeyDown(KeyCode.Menu)||Input.touchCount == 1){
			if (LevelScript.paused==true){
					LevelScript.paused=false;
					audio.Play();
					}
				
				else{
				LevelScript.paused=true;
				audio.Pause();
				}											
							
		}
			}
		if (LevelScript.paused==true){  // game paused
			Time.timeScale=0.0;
			pauseGUI.enabled=true;
			}
		else{
			Time.timeScale=1.0;	
			pauseGUI.enabled=false;
			
		var dir : Vector3;
		var maxtilt:float=175;
					
		dir.x = Input.acceleration.y*17*PlayerPrefs.GetFloat("gravity");;
		dir.z = -Input.acceleration.x*17*PlayerPrefs.GetFloat("gravity");;

	
		if(dir.x >= maxtilt)
		{
			dir.x=maxtilt;
		}
	
		if(dir.x<=-maxtilt)
		{
			dir.x=-maxtilt;
		}
		
		if(dir.z>=maxtilt)
		{
			dir.z=maxtilt;
		}
		
		if(dir.z<=-maxtilt)
		{
			dir.z=-maxtilt;
		}
	
		transform.eulerAngles = dir;
	}
}

}