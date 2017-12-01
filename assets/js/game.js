$(document).ready(function(){

	var gemArray = [];
	var ranNum;
	var wins = 0;
	var losses = 0;
	var myNum = [];
	// var guess;
	// var sum = total.reduce();
	

	function clear(){
		myNum.length = 0;
		gemArray.length = 0;
		guess = 0;
		$("#guess").text("0");
	}

	function getSum(total, sum){
		return total + sum;
		// guess = total + sum;
		
	};

	function random(){
		ranNum = Math.floor(Math.random() * 121);
		$("#goal").html(ranNum);
		console.log("goal: "+ranNum);
	};

	function assign(){
		for (var i = 0; i < 4; i++){
			x = Math.floor(Math.random() * 12+1);

			gemArray.push(x);
			console.log("btnArray: "+gemArray);
		};
	};

	function myClick(){
		console.log("current total: "+myNum.reduce(getSum));
		guess = myNum.reduce(getSum);
		$("#guess").text(myNum.reduce(getSum));
		console.log("guess: "+guess);

		if (guess > ranNum){
			losses++;
			$("#loss").text("Losses: "+losses);
			clear();
			random();
			assign();
		};
		if (guess === ranNum){
			wins++;
			$("#win").text("Wins: "+wins);
			clear();
			random();
			assign();
		};
	};

	$("#red").on("click", function(){
		console.log("gem a: "+gemArray[0]);
		myNum.push(gemArray[0]);
		myClick();
	});

	$("#blue").on("click", function(){
		console.log("gem b: "+gemArray[1]);
		myNum.push(gemArray[1]);
		myClick();
	});

	$("#green").on("click", function(){
		console.log("gem b: "+gemArray[2]);
		myNum.push(gemArray[2]);
		myClick();
	});

	$("#purp").on("click", function(){
		console.log("gem b: "+gemArray[3]);
		myNum.push(gemArray[3]);
		myClick();
	});

	random();
	assign();


})	