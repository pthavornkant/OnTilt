#pragma strict
@script ExecuteInEditMode()


          
function Update () {
if (Input.GetKeyDown(KeyCode.Escape)){
Application.LoadLevel("ModeSelection");
}


}