function myFunction(){
	var x;
	var r=confirm("confirm your subcription.");
	if(r==true){
		x="you successfully subscribed";
	}
	else{
		x="";
		return false;
	}
	document.getElementById("subscribe").innerHTML=x;
}