#pragma strict
public var speed:float;
function Start () {

}


function Update () {
	


				Time.timeScale=1.0;
				
				var dir:Vector3=transform.localEulerAngles;

				//limit to max 80 degree of tilting
				if( dir.x<90 && dir.x>80)
					dir.x=80;
					
				if( dir.x<280 && dir.x>270)
					dir.x=280;
					
				if( dir.z<90 && dir.z>80  )
					dir.z=80;
					
				if( dir.z<280 && dir.z>270)
					dir.z=280;	
			
			//print("x:"+dir.x+" "+"z:"+dir.z);
				if (Input.GetKey(KeyCode.W))
				{
					if(dir.x<=80||dir.x>=280)
						transform.eulerAngles=Vector3(dir.x+speed,dir.y,dir.z);
				}
				if (Input.GetKey(KeyCode.A))
				{
					if(dir.z<=80||dir.z>=280)
						transform.eulerAngles=Vector3(dir.x,dir.y,dir.z+speed);
	 			}
				if (Input.GetKey(KeyCode.S))
				{
					if(dir.x<=80||dir.x>=280)
						transform.eulerAngles=Vector3(dir.x-speed,dir.y,dir.z);
				}
				if (Input.GetKey(KeyCode.D))
				{
					if(dir.z<=80||dir.z>=280)
						transform.eulerAngles=Vector3(dir.x,dir.y,dir.z-speed);
				}
}