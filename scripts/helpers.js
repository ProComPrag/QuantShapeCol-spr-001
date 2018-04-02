// HELPERS:
// functions shared between more than two views or long functions

// attaches spr.findNextView() function to all the buttons that bring
// the next view when clicked. Which view should be shown is determined by 
// the conditionals in spr.findNextView() which is located in main.js
// if the button has id='send-data' (the button in subj info template has it),
// the data is collected sent before spr.findNextView(); is called
var showNextView = function() {
    var nexts = $('.next-view');
    
    for (var i=0; i<nexts.length; i++){
        if (nexts[i].id === 'sends-data') {
            nexts[i].addEventListener('click', function() {
            for (var i=0; i<spr.data.trials.length; i++) {
                spr.data.trials[i].age = $('#age').val(),
                spr.data.trials[i].gender = $('#gender').val(),
                spr.data.trials[i].education = $('#education').val(),
                spr.data.trials[i].languages = $('#languages').val(),
                spr.data.trials[i].comments = $('#comments').val().trim()
            }

            spr.findNextView();
            });
        } else {
            nexts[i].addEventListener('click', function() {
            spr.findNextView();
            });
        }
    }
};

// creates a sentence object that has showNextWord() function
var initSentence = function() {
    var sentence = {};
    // keeps track of word to be shown
    var currentWord = -1;

    // picks the word that should be shown when space is clicked
    // when there are no more words to show, the question appears
    sentence.showNextWord = function() {
        var words = $('.word').toArray();
        currentWord++;
        
        if (currentWord < words.length){
            $(words[currentWord]).addClass('visible');
            $(words[currentWord -1]).removeClass('visible');
        }
        // when all the words have been shown, the last one is hidden
        // and the response buttons appear
        else {
            // hides last word
            $(words[currentWord -1]).removeClass('visible');
            // shows the response buttons
            $('.question').removeClass('nodisplay');
        }
    };

    return sentence;
};
