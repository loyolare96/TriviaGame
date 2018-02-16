function start() {
    correct = 0;
    incorrect = 0;
    startTime = 120;
    intervalID = setInterval(count, 1000);
}
correct = 0;
incorrect = 0;
function count() {
    startTime--;
    $("#timer").text(startTime);
    if (startTime == 0) {
        gameOver();
    }
}

$(document).ready(function () {
    $('#quiz').hide();
})

$('#startButton').click(function () {
    start();
    $('#quiz').show();
    $(this).hide();
});
$('#stopButton').click(function () {
    gameOver();
});

function gameOver() {
    clearInterval(intervalID);
    if ($("#q1d").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }

    if ($("#q2a").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q3b").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q4a").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q5c").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q6a").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q7c").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q8b").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q9a").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    if ($("#q10a").is(':checked')) {
        correct++;
    }
    else {
        incorrect++;
    }
    console.log("Correct answers:" + correct);
    console.log("Incorrect answers:" + incorrect);
    $('#quiz').hide();
    $("#timerTitle").hide();
    $("#timer").hide();
    $('#correctAnswers').text("Correct answers:" + correct);
    $('#incorrectAnswers').text("Incorrect answers:" + incorrect);
    $('#results').show();
}