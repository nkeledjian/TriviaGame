// SPACE THEMED TRIVIA
// document.ready? Followed by window.onload?

// Display the guesses during and at end of game
var corGCount = $("#corGuessed");
var incorGCount = $("#incorGuessed");
var question = $("#q-and-a");

    var space = [
        {
        question: "In what year did Neil Armstrong step foot on the moon?",
        answer: [
            1965,
            1968,
            1969,
            1973,
        ],
        correctAnswer: 1969,
        },
        {
        question: "True or False: The Earth is 93 million miles away from the Sun",
        answer: [
            "True",
            "False",
        ],
        correctAnswer: true,
        },
        {
        question: "All stars use this element as it's fuel (hint: it's the most abundant element in the universe!)",
        answer: [
            "Helium",
            "Iron",
            "Hydrogen",
            "Oxygen",
        ],
        correctAnswer: "Hydrogen",
        },
    ]
    console.log(space[0]);
    window.onload = function() {
        // start timer
        $("#start").on("click", game.start); 
        // html.append questions


        // collect user answers...

        // -- Next to build --- 

        // set start button to hidden when clicked

        // Start button will initiate question q-and-a sequence

        /* implement for loop on for loop to access the space object and it's arrays of questions create a whole separate function to handle this? Should this be part of the game.start object?*/
        // for (var i=0; i<space.length; i++) {
        //     console.log(space.length);
        //     console.log(space[i].question);
            
        //     for(var j=0; j<space[i].answer.length; i++) {

        //         console.log(space[i].answer)
        //         // if user clicks corect space.answer, corGuess++
        //         // else is user clicks incorrect space.answer, incorGuess++
        //     }
        // }
        
        // display q's and a's in: div id=q-and-a 
    };

    // ---NOTES---
    // Function to load question - load question right as timer starts
    // Current question counter - aid for loading question
    // Answer submission = increment current question counter
    // Call load question function with new question 
    // Radio buttons for form - assign value to <input> tags
        // If user selects correct <input> = corGuess++


    var timerRunning = false;
    var game = {
        corGuess: 0, // Correct guesses
        incorGuess: 0, // Incorrect guesses
        time: 60,
        
        countDown: function() {
            // decrement time by 1
            game.time--;

            /* Get the current time, pass that into the game.timeConverter function */
            // result saved in var "converted"
            var converted = game.timeConverter(game.time);
            console.log(converted);

            // Display variable in "display" div.
            $("#display").text(converted);
        },
        nextQuestion: function(){
            // load question and cycle through questions

            // currentQuestion++
            // load();
        },
        load: function(){
            // call start function
            // display one question using current question
            // for loop - access answers only
            for(var j=0; j<space[i].answer.length; i++) {

                console.log(space[i].answer)
                // if user clicks corect space.answer, corGuess++
                // else is user clicks incorrect space.answer, incorGuess++
            }
        },

        start: function() {
            if (!timerRunning) {
                // setInverval will decrement 1 every 1 second
                setInterval(game.countDown, 1000 * 1);
                timerRunning = true;
                }
            else if (game.time == 0){
                // endGame(); - no more question? display results page
                alert("Out of Time! Game Over!");
                
            }
            console.log('start func running...');

        },
        /* These score updates will eventually be implemented in another function - considering adding score clearing instructions for the endGame function */
        endGame: function() {
            corGCount.text(corGuess);
            incorGCount.text(incorGuess);
        },
        // This converts game.time to look like a digital timer - still needs a bit of tweaking to work with more than 60 seconds of time
        timeConverter: function(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t + (minutes * 60);

            if (seconds < 1) {
            seconds = "0" + seconds;
            }
            if (minutes === 0) {
            minutes = "00";
            }
            else if (minutes < 10) {
            minutes = "0" - minutes;
            }
            return minutes + ":" + seconds;
        },
    }

