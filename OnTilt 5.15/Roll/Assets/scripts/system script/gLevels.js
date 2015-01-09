#pragma strict
@script ExecuteInEditMode()
function Start () {

}

function Update () {

}

function OnGUI () {



	if (GUI.Button(new Rect(Screen.width/12,Screen.height/12,Screen.width*3/12,Screen.height*3/12),"C1")){
           LevelScript.lastLevelPlayed = 400;
             Application.LoadLevel("lv400");
            
            }
    if (GUI.Button(new Rect(Screen.width*5/12,Screen.height/12,Screen.width*3/12,Screen.height*3/12),"C2")){
           LevelScript.lastLevelPlayed = 401;
             Application.LoadLevel("lv401");
            
            }
           
    if (GUI.Button(new Rect(Screen.width/12,Screen.height*5/12,Screen.width*3/12,Screen.height*3/12),"A1")){
            LevelScript.lastLevelPlayed = 500;
             Application.LoadLevel("lv500");
            }
                   
    if (GUI.Button(new Rect(Screen.width*5/12,Screen.height*5/12,Screen.width*3/12,Screen.height*3/12),"Mix1")){
            LevelScript.lastLevelPlayed = 500;
             Application.LoadLevel("lv501");
            }
            
    //if (GUI.Button(new Rect(Screen.width*9/12,Screen.height/12,Screen.width*3/12,Screen.height*3/12),"3"))
           // Application.LoadLevel("300");
}