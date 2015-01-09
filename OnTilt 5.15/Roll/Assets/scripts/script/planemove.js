#pragma strict
@script ExecuteInEditMode()
public var currentLevel:int;


private var dir : Vector3 =Vector3(0,0,0);

function Start () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	LevelScript.lastLevelPlayed=currentLevel;
}



function Update () {	

if (Application.platform == RuntimePlatform.Android){
	
			Time.timeScale=1.0;	
		
			
		var dir : Vector3;
		var maxtilt:float=175;
					
		dir.x = Input.acceleration.y*18*PlayerPrefs.GetFloat("gravity");
		dir.z = -Input.acceleration.x*18*PlayerPrefs.GetFloat("gravity");

	
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