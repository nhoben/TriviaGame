


 

 function submitAnswers (){
    var total = 10;
    var score = 0;

    // get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;


//validation
    

    //set correct answers

    var answers = ["b", "c","a", "a", "a", "b", "c", "d", "a", "b"];

    //check answers
   for( i = 1; i <= total;i++){
       if(eval('q' + i) == answers[i - 1]){
           score++;
       }
   }
    alert('You scored ' +score+ ' out of '+total);
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
 