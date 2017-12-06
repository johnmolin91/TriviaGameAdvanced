$( document ).ready(function() {

	var current;
	var q1 = "1. Which movie is about a man who is unable to form new memories as a result of a head trauma?"
	var q2 = "2. In which David Lynch movie is the protagonist plagued by visions of a mystery man?"
	var q3 = "3. In which South American city does the movie City of God take place?"
	var q4 = "4. In the movie 'The Matrix', which pill does Neo take?"
	var q5 = "5. Which actor stars in 'Vanilla Sky' as a man who, after a car accident, lives his life in a lucid dream state?"
	var q6 = "6. Who directed the movies 'Interstellar', 'Inception', and 'The Prestige?'"

	current = q1;
	$(".question").html(current);

	if (current == q1) {
		$("#answerOne").text("The Usual Suspects").attr("class", "wrong");
		$("#answerTwo").text("Memento").attr("class", "right");
		$("#answerThree").text("Avatar").attr("class", "wrong");
		$("#answerFour").text("The Rainmaker").attr("class", "wrong");
	} else if (current == q2) {
		$("#answerOne").text("Lost Highway").attr("class", "right");
		$("#answerTwo").text("Mulholland Drive").attr("class", "wrong");
		$("#answerThree").text("Eraserhead").attr("class", "wrong");
		$("#answerFour").text("Inland Empire").attr("class", "wrong");
	} else if (current == q3) {
		$("#answerOne").text("Buenos Aires").attr("class", "wrong");
		$("#answerTwo").text("Bogota").attr("class", "wrong");
		$("#answerThree").text("Rio de Janeiro").attr("class", "right");
		$("#answerFour").text("Santiago").attr("class", "wrong");
	} else if (current == q4) {
		$("#answerOne").text("Green Pill").attr("class", "wrong");
		$("#answerTwo").text("Blue Pill").attr("class", "wrong");
		$("#answerThree").text("Red Pill").attr("class", "right");
		$("#answerFour").text("Orange Pill").attr("class", "wrong");
	} else if (current == q5) {
		$("#answerOne").text("George Clooney").attr("class", "wrong");
		$("#answerTwo").text("Brad Pitt").attr("class", "wrong");
		$("#answerThree").text("Keanu Reeves").attr("class", "wrong");
		$("#answerFour").text("Tom Cruise").attr("class", "right");
	} else if (current == q6) {
		$("#answerOne").text("Christopher Nolan").attr("class", "right");
		$("#answerTwo").text("Steven Spielberg").attr("class", "wrong");
		$("#answerThree").text("Martin Scorsese").attr("class", "wrong");
		$("#answerFour").text("Quentin Tarantino").attr("class", "wrong");
	}

});