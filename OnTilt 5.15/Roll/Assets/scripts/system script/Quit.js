#pragma strict

function Start () {
	
}

function Update () {
		if (Input.GetKeyDown(KeyCode.Escape)) 
			{ Application.Quit();}
			
		for (var i = 0; i < Input.touchCount; ++i) {
			if (Input.GetTouch(i).phase == TouchPhase.Began) {	
		//if(Input.GetKeyDown(KeyCode.Menu)||Input.touchCount == 1){
			Application.LoadLevel("ModeSelection");									
			}					
		}

}