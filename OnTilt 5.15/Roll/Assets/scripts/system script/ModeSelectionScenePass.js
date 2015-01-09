#pragma strict
@script ExecuteInEditMode()

function Start () {

}

function Update () {
if (Input.GetKeyDown(KeyCode.Escape)){
Application.LoadLevel("mainmenu");
}
}