var score = 0;
var points;
var mainDiv = $('#mainDiv');
//Greeting Function when page loads
var greetingFxn = function(){
    var titleDiv = document.createElement('div');
        $(titleDiv).html('Are you ready to play the TRIVIA GAME!');
        $(titleDiv).attr('id', 'infoText');
        $(titleDiv).appendTo(mainDiv);
    var startButton = document.createElement('button');
        $(startButton).html('START!');
        $(startButton).attr('id', 'startButton')
        $(startButton).attr('style', 'display: flex; margin-left: auto; margin-right: auto;')
        $(startButton).attr('class', 'mx-auto')
        $(startButton).appendTo(mainDiv);
    console.log('greetingFxn operational');
};

//Instructions
var instruct = function(){
    $('#mainDiv').empty();
    console.log('Prepare to be instructed on the finer points of Trivia!');
    var instructions = document.createElement('div');
        $(instructions).attr('id','infoText');
        $(instructions).append('Answer Question within the time limit to win!<br><br><br>Ready?');
        $(instructions).appendTo('#mainDiv');
    var letsGoButton = document.createElement('button');
        $(letsGoButton).html('Lets Go!');
        $(letsGoButton).attr('style', 'display: flex; margin-left: auto; margin-right: auto;');
        $(letsGoButton).attr('id', 'letsGoButton')
        $(letsGoButton).appendTo('#mainDiv');
    $(document).on('click', '#letsGoButton', letsGo);
};

//Leave Instructions
var letsGo = function(){
    $(mainDiv).empty();
    console.log('Lets get to it!');
};
$(document).on('click', '#startButton', instruct);
$(document).ready(greetingFxn());
