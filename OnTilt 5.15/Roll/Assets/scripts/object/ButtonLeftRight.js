#pragma strict
private var temp:int;
private var maxlevel:int;
private var maxglevel:int;

function Start () {
	
}

function Update () {
	maxlevel = PlayerPrefs.GetInt("maxlevel");
	maxglevel= PlayerPrefs.GetInt("maxglevel");

}
function OnMouseDown () {
	
	if(this.gameObject.name=="Button-left-lv"){
		temp= PlayerPrefs.GetInt("level");
		if(temp>1)
			PlayerPrefs.SetInt("level",temp-1);
	
			
	}
	if(this.gameObject.name=="Button-right-lv"){
		temp= PlayerPrefs.GetInt("level");
		if(temp<maxlevel)
			PlayerPrefs.SetInt("level",temp+1);
		
	}
	
	if(this.gameObject.name=="Button-left-glv"){
		temp= PlayerPrefs.GetInt("glevel");
		if(temp>1)
			PlayerPrefs.SetInt("glevel",temp-1);
	
	}
	if(this.gameObject.name=="Button-right-glv"){
		temp= PlayerPrefs.GetInt("glevel");
		if(temp<maxglevel)
			PlayerPrefs.SetInt("glevel",temp+1);
	
	}
}