#pragma strict

static var lastLevelPlayed:int= 0;
static var paused:boolean = false;
static var Endtime:float=0;
static var deviceUniqueIdentifier: String;
function Start () {
//this will clear out all the high scores if device run the game the first time.

	if(!PlayerPrefs.HasKey(deviceUniqueIdentifier)){
		PlayerPrefs.DeleteAll();
		PlayerPrefs.SetInt(deviceUniqueIdentifier,1);
		PlayerPrefs.SetInt("level",0);
		PlayerPrefs.SetInt("glevel",0);
		PlayerPrefs.SetFloat("gravity",2);
	
	
	}
	PlayerPrefs.SetInt("maxlevel",8);
	PlayerPrefs.SetInt("maxglevel",8);
	
}

function Update () {
	//Level High Score
}

function Awake() {
DontDestroyOnLoad(transform.gameObject);
}