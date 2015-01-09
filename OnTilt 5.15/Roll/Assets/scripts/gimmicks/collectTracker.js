#pragma strict

static var doneCollecting = false;
static var colcount = 0;
public var goalcount : int;

var CountText:GUIText;

function Start () {
	CountText.text="Collectable: 0";
	CountText.fontSize=35;
}

function Update () {

	CountText.text="Collectable:"+(goalcount-colcount).ToString("0");
	if (colcount == goalcount)
	{
		doneCollecting = true;
		CountText.text="Done!";
	}

}

function Awake() {
	//DontDestroyOnLoad(transform.gameObject);
	colcount = 0;
	doneCollecting = false;
}