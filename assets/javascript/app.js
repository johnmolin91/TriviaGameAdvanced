$( document ).ready(function() {

	var current;
	var q1 = "1. Which movie is about a man who is unable to form new memories as a result of a head trauma?"
	var q2 = "2. In which David Lynch movie is the protagonist plagued by visions of a mystery man?"
	var q3 = "3. In which South American city does the movie City of God take place?"
	var q4 = "4. In the movie 'The Matrix', which pill does Neo take?"
	var q5 = "5. Which actor stars in 'Vanilla Sky' as a man who, after a car accident, lives his life in a lucid dream state?"
	var q6 = "6. Who directed the movies 'Interstellar', 'Inception', and 'The Prestige?'"

	var correctCounter = 0;

	current = q1;
	$(".question").html(current);

	if (current == q1) {
		$("#answerOne").text("The Usual Suspects");
		$("#answerTwo").text("Memento");
		$("#answerThree").text("Avatar");
		$("#answerFour").text("The Rainmaker");
		$("#answerTwo").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are correct. Memento is the answer.");
    		correctIncorrect1();
    		console.log(correctCounter);
    		current = q2;
    		repopulate();
    	})
    	$("#answerOne").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Memento is the answer.");
    		correctIncorrect1();
    		console.log(correctCounter);
    		current = q2;
    		repopulate();
    	})
    	$("#answerThree").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Memento is the answer.");
    		correctIncorrect1();
    		console.log(correctCounter);
    		current = q2;
    		repopulate();
    	})
    	$("#answerFour").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Memento is the answer.");
    		correctIncorrect1();
    		console.log(correctCounter);
    		current = q2;
    		repopulate();
    	})

    	// $(".answers").on("click", setTimeout({ repopulate }, 2000));
    }

    if (current == q2) {
    	$("#answerOne").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are correct. Lost Highway is the answer.");
    		correctIncorrect2();
    		console.log(correctCounter);
    		current = q3;
    		repopulate();
    	})
    	$("#answerTwo").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Lost Highway is the answer.");
    		correctIncorrect2();
    		console.log(correctCounter);
    		current = q3;
    		repopulate();
    	})
    	$("#answerThree").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Lost Highway is the answer.");
    		correctIncorrect2();
    		console.log(correctCounter);
    		current = q3;
    		repopulate();
    	})
    	$("#answerFour").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Lost Highway is the answer.");
    		correctIncorrect2();
    		console.log(correctCounter);
    		current = q3;
    		repopulate();
    	})
    }
    if (current == q3) {
    $("#answerOne").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Rio de Janeiro is the answer.");
    		correctIncorrect3();
    		console.log(correctCounter);
    		current = q4;
    		repopulate();
    	})
    	$("#answerTwo").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Rio de Janeiro is the answer.");
    		correctIncorrect3();
    		console.log(correctCounter);
    		current = q4;
    		repopulate();
    	})
    	$("#answerThree").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are correct. Rio de Janeiro is the answer.");
    		correctIncorrect3();
    		console.log(correctCounter);
    		current = q4;
    		repopulate();
    	})
    	$("#answerFour").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Rio de Janeiro is the answer.");
    		correctIncorrect3();
    		console.log(correctCounter);
    		current = q4;
    		repopulate();
    	})
    }

    if (current == q4) {
    	$("#answerOne").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Red Pill is the answer.");
    		console.log(correctCounter);
    		current = q5;
    		repopulate();
    	})
    	$("#answerTwo").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Red Pill is the answer.");
    		console.log(correctCounter);
    		current = q5;
    		repopulate();
    	})
    	$("#answerThree").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are correct. Red Pill is the answer.");
    		console.log(correctCounter);
    		current = q5;
    		repopulate();
    	})
    	$("#answerFour").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Red Pill is the answer.");
    		console.log(correctCounter);
    		current = q5;
    		repopulate();
    	})
    }
    if (current == q5) {
    	$("#answerOne").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Tom Cruise is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    	$("#answerTwo").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Tom Cruise is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    	$("#answerThree").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Tom Cruise is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    	$("#answerFour").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are correct. Tom Cruise is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    }

    if (current == q6) {
    	$("#answerOne").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are correct. Christopher Nolan is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    	$("#answerTwo").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Christopher Nolan is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    	$("#answerThree").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Christopher Nolan is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    	$("#answerFour").on("click", function() {
    		$("#answerOne").empty();
    		$("#answerTwo").empty();
    		$("#answerThree").empty();
    		$("#answerFour").empty();
    		$(".result").html("You are incorrect. Christopher Nolan is the answer.");
    		console.log(correctCounter);
    		current = q6;
    		repopulate();
    	})
    	// $(".answers").on("click", setTimeout({ endGame }, 3000));
    }
        
	function repopulate() {
		$(".question").empty();
		$(".result").empty();
		if (current == q1) {
		$(".question").html(current);
		$("#answerOne").text("Lost Highway");
		$("#answerTwo").text("Mulholland Drive");
		$("#answerThree").text("Eraserhead");
		$("#answerFour").text("Inland Empire");
    	// $(".answers").on("click", setTimeout({ repopulate }, 2000));
		} else if (current == q2) {
		$(".question").html(current);
		$("#answerOne").text("Buenos Aires");
		$("#answerTwo").text("Bogota");
		$("#answerThree").text("Rio de Janeiro");
		$("#answerFour").text("Santiago");
		
    	// $(".answers").on("click", setTimeout({ repopulate }, 2000));
		} else if (current == q3) {
		$(".question").html(current);
		$("#answerOne").text("Green Pill");
		$("#answerTwo").text("Blue Pill");
		$("#answerThree").text("Red Pill");
		$("#answerFour").text("Orange Pill");
		
    	// $(".answers").on("click", setTimeout({ repopulate }, 2000));
		} else if (current == q4) {
		$(".question").html(current);
		$("#answerOne").text("George Clooney");
		$("#answerTwo").text("Brad Pitt");
		$("#answerThree").text("Keanu Reeves");
		$("#answerFour").text("Tom Cruise");
		
    	// $(".answers").on("click", setTimeout({ repopulate }, 2000));
		} else if (current == q5) {
		$(".question").html(current);
		$("#answerOne").text("Christopher Nolan");
		$("#answerTwo").text("Steven Spielberg");
		$("#answerThree").text("Martin Scorsese");
		$("#answerFour").text("Quentin Tarantino");
		}
	}

	function endGame() {
		$(".question").empty();
		$(".answers").empty();
		$(".result").html(correctCounter + " correct");
	}
	
	function correctIncorrect1() {
		if (current == q1) {
			$("#answerTwo").on("click", function() {
				correctCounter++;
			})
		}
	}
	function correctIncorrect2() {
		if (current == q2) {
			$("#answerOne").on("click", function() {
				correctCounter++;
			})
		}
	}
	function correctIncorrect3() {
		if (current == q3) {
			$("#answerThree").on("click", function() {
				correctCounter++;
			})
		}
	}
	function correctIncorrect4() {
		if (current == q4) {
			$("#answerThree").on("click", function() {
				correctCounter++;
			})
		}
	}
	function correctIncorrect5() {
		if (current == q5) {
			$("#answerFour").on("click", function() {
				correctCounter++;
			})
		}
	}
	function correctIncorrect6() {
		if (current == q6) {
			$("#answerOne").on("click", function() {
				correctCounter++;
			})
		}
	}

});