// creates Trial View
var initTrialView = function(trialInfo, CT) {
    var view = {};
    view.name = 'trial';
    view.template = $('#trial-view').html();

    // initialises a canvas (code is canvas.js)
    var canvas = createCanvas();
    var readingDates = [];
    var readingTimes = [];
    var rtCount = trialInfo.sentence.split(" ").length;
    var sentence = initSentence();
    var startingTime = Date.now();

    // renders the templ
    $('#main').html(Mustache.render(view.template, {
        currentTrial: CT + 1,
        QUD: trialInfo.QUD,
        totalTrials: spr.data.trials.length,
        sentence: trialInfo.sentence.split(" "),
        helpText: config_general.expSettings.helpText
    }));

    // creates one continuous underline below the sentence if it was set to true in config.js
    if (config_general.expSettings.underlineOneLine === true) {
        var words = $(".word");

        for (var i=0; i<words.length; i++) {
            $(words[i]).css('margin', '0 -3px');
        }
    }

    canvas.draw(trialInfo);

    // hides the fixation point and shows the stimulus
    var showStimulus = function() {
        $('.stimulus').removeClass('nodisplay');
        $('.pause-container').addClass('nodisplay');
    };

    // shows the QUD for a second and then the fixation cross appears
    // calls showStimulus after a 'pause' amount of time
    setTimeout(function() {
        $('.pause-container').removeClass('nodisplay');
        setTimeout(showStimulus, config_general.expSettings.pause);
    }, 1000);

    // checks whether the key pressed is space and if so calls sentence.showNextWord()
    // handleKeyUp() is called when a key is pressed
    var handleKeyUp = function(e) {
        $('.help-text').addClass('hidden');
        if (e.which === 32) {
            sentence.showNextWord();

            // collects the dates (unix time) in a variable readingDates every time a word is shown
            if (rtCount >= 0) {
            readingDates.push(Date.now());
            }
            rtCount--;
        }
    };

    // converts the readingDates into readingTimes by substracting
    // returns a list of readingTimes
    var getDeltas = function() {
        var deltas = [];

        for (var i = 0; i < readingDates.length - 1; i++) {
            deltas[i] = readingDates[i+1] - readingDates[i];
        };

        return deltas;
    };

    // checks the expSettings in config.js and depending on the settings
    // either show the image for a particular amount of time
    if (config_general.expSettings.hideImage === true) {
    setTimeout(function() {
        // add a css class to the image to hide it
        $('.stimulus').addClass('nodisplay');
        // shows the sentence (only the underlines)
        $('.sentence').removeClass('nodisplay');

        // attaches an event listener for key pressed
        // called handleKeyUp() when a key is pressed. (handleKeyUp() checks whether the key is space)
        $('.help-text').removeClass('hidden');
        $('body').on('keyup', handleKeyUp);
    }, config_general.expSettings.showDuration + config_general.expSettings.pause + 1000);
    // or the image does not disappear at all
    } else {
        // attaches an event listener for key pressed
        // called handleKeyUp() when a key is pressed. (handleKeyUp() checks whether the key is space)
        setTimeout(function() {
            $('.help-text').removeClass('hidden');
            $('.sentence').removeClass('nodisplay');
            $('body').on('keyup', handleKeyUp);
        }, config_general.expSettings.pause + 1000);
    }

    // attaches an event listener to the yes / no radio inputs
    // when an input is selected a response property with a value equal to the answer is added to the trial object
    // as well as a readingTimes property with value - a list containing the reading times of each word
    $('input[name=question]').on('change', function() {
        $('body').off('keyup', handleKeyUp);
        spr.data.trials[CT].time_spent = Date.now() - startingTime - config_general.expSettings.pause - 1000;
        spr.data.trials[CT].trial_number = CT+1;
        spr.data.trials[CT].response = $('input[name=question]:checked').val();
        spr.data.trials[CT].reading_times = getDeltas();
        console.log(spr.data.trials[CT]);
        setTimeout(function() {
            spr.findNextView();
        }, 200);
    });

    return view;
};