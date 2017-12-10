$( document ).ready(function() {

    var current;
    var q1 = "1. Which movie is about a man who is unable to form new memories as a result of a head trauma?"
    var q2 = "2. In which David Lynch movie is the protagonist plagued by visions of a mystery man?"
    var q3 = "3. In which South American city does the movie City of God take place?"
    var q4 = "4. In the movie 'The Matrix', which pill does Neo take?"
    var q5 = "5. Which actor stars in 'Vanilla Sky' as a man who, after a car accident, lives his life in a lucid dream state?"
    var q6 = "6. Who directed the movies 'Interstellar', 'Inception', and 'The Prestige?'"

    var correctCounter = 0;
    var timer = 20;
    var intervalId;

    function decrement() {
        timer--;
        $("#timeLeft").text(timer + " seconds");
        if (timer === 0 ) {
            stop();
            $(".question").empty();
            $(".answers").empty();
            $(".result").text("Times up!");
        }
    }

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
    }

    function reset() {
        timer = 20;
    }

    run();

    current = q1;
    $(".question").html(current);

    if (current == q1) {
        $("#answerOne").text("The Usual Suspects").addClass("wrong");
        $("#answerTwo").text("Memento").addClass("right");
        $("#answerThree").text("Avatar").addClass("wrong");
        $("#answerFour").text("The Rainmaker").addClass("wrong");
        $("#answerTwo").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are correct. Memento is the answer.");
            // correctCounter++;
            console.log(correctCounter);
            current = q2;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerOne").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Memento is the answer.");
            console.log(correctCounter);
            current = q2;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerThree").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Memento is the answer.");
            console.log(correctCounter);
            current = q2;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerFour").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Memento is the answer.");
            console.log(correctCounter);
            current = q2;
            setTimeout(repopulate, 2000);
            reset();
        })
    }   

    function repopulate() {
        $(".question").empty();
        $(".result").empty();
        $("#answerOne").removeClass();
        $("#answerTwo").removeClass();
        $("#answerThree").removeClass();
        $("#answerFour").removeClass();
        if (current == q2) {
        $(".question").html(current);
        $("#answerOne").text("Lost Highway").addClass("right");
        $("#answerTwo").text("Mulholland Drive").addClass("wrong");
        $("#answerThree").text("Eraserhead").addClass("wrong");
        $("#answerFour").text("Inland Empire").addClass("wrong");
        $("#answerOne").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are correct. Lost Highway is the answer.");
            // correctCounter++;
            console.log(correctCounter);
            current = q3;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerTwo").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Lost Highway is the answer.");
            console.log(correctCounter);
            current = q3;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerThree").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Lost Highway is the answer.");
            console.log(correctCounter);
            current = q3;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerFour").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Lost Highway is the answer.");
            console.log(correctCounter);
            current = q3;
            setTimeout(repopulate, 2000);
            reset();
        })
        } else if (current == q3) {
        $(".question").html(current);
        $("#answerOne").text("Buenos Aires").addClass("wrong");
        $("#answerTwo").text("Bogota").addClass("wrong");
        $("#answerThree").text("Rio de Janeiro").addClass("right");
        $("#answerFour").text("Santiago").addClass("wrong");
        $("#answerOne").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Rio de Janeiro is the answer.");
            console.log(correctCounter);
            current = q4;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerTwo").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Rio de Janeiro is the answer.");
            console.log(correctCounter);
            current = q4;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerThree").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are correct. Rio de Janeiro is the answer.");
            console.log(correctCounter);
            // correctCounter++;
            current = q4;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerFour").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Rio de Janeiro is the answer.");
            console.log(correctCounter);
            current = q4;
            setTimeout(repopulate, 2000);
            reset();
        })
        } else if (current == q4) {
        $(".question").html(current);
        $("#answerOne").text("Green Pill").addClass("wrong");
        $("#answerTwo").text("Blue Pill").addClass("wrong");
        $("#answerThree").text("Red Pill").addClass("right");
        $("#answerFour").text("Orange Pill").addClass("wrong");
        $("#answerOne").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Red Pill is the answer.");
            console.log(correctCounter);
            current = q5;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerTwo").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Red Pill is the answer.");
            console.log(correctCounter);
            current = q5;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerThree").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are correct. Red Pill is the answer.");
            console.log(correctCounter);
            // correctCounter++;
            current = q5;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerFour").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Red Pill is the answer.");
            console.log(correctCounter);
            current = q5;
            setTimeout(repopulate, 2000);
            reset();
        })
        } else if (current == q5) {
        $(".question").html(current);
        $("#answerOne").text("George Clooney").addClass("wrong");
        $("#answerTwo").text("Brad Pitt").addClass("wrong");
        $("#answerThree").text("Keanu Reeves").addClass("wrong");
        $("#answerFour").text("Tom Cruise").addClass("right");
        $("#answerOne").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Tom Cruise is the answer.");
            console.log(correctCounter);
            current = q6;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerTwo").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Tom Cruise is the answer.");
            console.log(correctCounter);
            current = q6;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerThree").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Tom Cruise is the answer.");
            console.log(correctCounter);
            current = q6;
            setTimeout(repopulate, 2000);
            reset();
        })
        $("#answerFour").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are correct. Tom Cruise is the answer.");
            console.log(correctCounter);
            // correctCounter++;
            current = q6;
            setTimeout(repopulate, 2000);
            reset();
        })
        } else if (current == q6) {
        $(".question").html(current);
        $("#answerOne").text("Christopher Nolan").addClass("right");
        $("#answerTwo").text("Steven Spielberg").addClass("wrong");
        $("#answerThree").text("Martin Scorsese").addClass("wrong");
        $("#answerFour").text("Quentin Tarantino").addClass("wrong");
        $("#answerOne").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are correct. Christopher Nolan is the answer.");
            console.log(correctCounter);
            // correctCounter++;
            current = q6;
            endGame();
        })
        $("#answerTwo").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Christopher Nolan is the answer.");
            console.log(correctCounter);
            current = q6;
            endGame();
        })
        $("#answerThree").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Christopher Nolan is the answer.");
            console.log(correctCounter);
            current = q6;
            endGame();
        })
        $("#answerFour").on("click", function() {
            $("#answerOne").empty();
            $("#answerTwo").empty();
            $("#answerThree").empty();
            $("#answerFour").empty();
            $(".result").html("You are incorrect. Christopher Nolan is the answer.");
            console.log(correctCounter);
            current = q6;
            endGame();
        })
        }
    }
    function endGame() {
         $(".question").empty();
         $(".answers").empty();
         $(".result").html(correctCounter + " correct");
         stop();
    }

    $('.right').click(function() {
        correctCounter++;
     })

});