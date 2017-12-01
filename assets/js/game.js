$(document).ready(function(){

	var btnArray = [];
	var gemA; 
	var gemB;
	var gemC;
	var gemD;
	var ranNum;
	var wins = 0;
	var losses = 0;
	var sum;
	

	function random(){
		var ranNum = Math.floor(Math.random() * 121);
		$("#goal").html(ranNum);
		console.log("goal: "+ranNum);
	}

	random();


	function assign(){
		for (var i = 0; i < 4; i++){
			x = Math.floor(Math.random() * 13);
			btnArray.push(x);
			console.log("btnArray: "+btnArray);
			gemA = btnArray[0]; 
			gemB = btnArray[1];
			gemC = btnArray[2];
			gemD = btnArray[3];
		}
	};

	assign();
	console.log("gem a: "+gemA);
	console.log("gem b: "+gemB);
	console.log("gem c: "+gemC);
	console.log("gem d: "+gemD);

})	