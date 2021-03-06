// creates Practice view
var initPracticeView = function(CT) {
    var view = {};
    view.name = 'practice',
    view.template = $('#practice-view').html();
    var sentence = initSentence();
    var trialInfo = exp.data.practice_trials[CT];
    // initialises a canvas (code is canvas.js)
    var canvas = createCanvas();

    $('#main').html(Mustache.render(view.template, {
        title: config_views.practice.title,
        QUD: trialInfo.QUD,
        sentence: trialInfo.sentence.split(" "),
        helpText: config_general.expSettings.helpText
    }));

    // draws the picture on the canvas
    canvas.draw(trialInfo);

    // creates one continuous underline below the sentence if it was set to true in config/config_general.js
    if (config_general.expSettings.underlineOneLine === true) {
        var words = $(".word");

        for (var i=0; i<words.length; i++) {
            $(words[i]).css('margin', '0 -3px');
        }
    }

    // hides the fixation point and shows the stimulus
    var showStimulus = function() {
        $('.stimulus').removeClass('nodisplay');
        $('.cross-container').addClass('nodisplay');
    };

    // shows the QUD for a second and then the fixation cross appears
    // calls showStimulus after a 'pause' amount of time
    setTimeout(function() {
        $('.cross-container').removeClass('nodisplay');
        setTimeout(showStimulus, config_general.expSettings.crossDuration);     
    }, config_general.expSettings.pause);

    // checks the expSettings in config/config_general.js and depending on the settings
    // either show the image for a particular amount of time
    if (config_general.expSettings.hideImage === true) {
        setTimeout(function() {
            // add a css class to the image to hide it
            $('.stimulus').addClass('nodisplay');
            $('.help-text').removeClass('hidden');
            $('.sentence').removeClass('nodisplay');

            // attaches an event listener for key pressed
            // called handleKeyUp() when a key is pressed. (handleKeyUp() checks whether the key is space)
            $('body').on('keyup', handleKeyUp);
        }, config_general.expSettings.showDuration + config_general.expSettings.pause + config_general.expSettings.crossDuration);
    // or the image does not disappear at all
    } else {
        // attaches an event listener for key pressed
        // called handleKeyUp() when a key is pressed. (handleKeyUp() checks whether the key is space)
        setTimeout(function() {
            $('.help-text').removeClass('hidden');
            $('.sentence').removeClass('nodisplay');
            $('body').on('keyup', handleKeyUp);
        }, config_general.expSettings.pause + config_general.expSettings.crossDuration);
    }

    // checks whether the key pressed is space and if so calls sentence.showNextWord()
    // handleKeyUp() is called when a key is pressed
    var handleKeyUp = function(e) {
        if (e.which === 32) {
            $('.help-text').addClass('hidden');
            sentence.showNextWord();
        }
    };

    $('input[name=question]').on('change', function() {
        $('body').off('keyup', handleKeyUp);
        exp.findNextView();
    });

    return view;
};