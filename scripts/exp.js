// initExp() creates and returns an object ('data') where the experiment's info is stored.
// data.trials - a list of objects containing the trial info that is needed for each slide
// of the experiment.
var initExp = function() {
    var data = {};

    // how many conditions to show of each logical type
    var numberSomeBiased = 6
    var numberSomeUnbiased = 6
    var numberAllBiased = 6
    var numberAllUnbiased = 6
    var totalLogicalConditions = numberSomeBiased + numberSomeUnbiased + numberAllBiased + numberAllUnbiased
    
    var logicalConditions = new Array(totalLogicalConditions)
    logicalConditions.fill("some,biased", 0, numberSomeBiased)
    logicalConditions.fill("some,unbiased", numberSomeBiased, numberSomeBiased + numberSomeUnbiased)
    logicalConditions.fill("some,biased", numberSomeBiased + numberSomeBiased, numberSomeBiased + numberSomeBiased + numberAllBiased)
    logicalConditions.fill("all,unbiased", numberSomeBiased + numberSomeBiased + numberAllBiased, totalLogicalConditions)
    
    var someBiased = ['4, 0']; // there are other possibilities
    var someUnbiased = ['4, 4'];
    var allBiased = ['8, 4'];
    var allUnbiased = ['8, 0'];

    var someBiased = [{focalColor_focalObject: 4, focalColor_otherObject: 0}] // there are other possibilities
    var someUnbiased = [{focalColor_focalObject: 4, focalColor_otherObject: 4}]
    var allBiased = [{focalColor_focalObject: 8, focalColor_otherObject: 4}]
    var allUnbiased = [{focalColor_focalObject: 8, focalColor_otherObject: 0}]
    
    var shapes = ['circle', 'triangle', 'square'];
    var colors = ['red', 'blue'];

    var createTrialByLogicalType = function(quant, bias) {

	// A logical type is defined by the pair 'quant' ('some' or 'all')
	// and 'bias' ('biased' or 'unbiased').
	// This function creates and returns a random instance of each
	// logical type.
	// The only crucial information is the number of elements of focal color
	// to display; all other choices (focal shape, focal color, side) are random.

	var trial = {quant: quant,
		     bias: bias}; // trial object to populate with relevant info subsequently

	if (quant === 'some' && bias === 'biased') { // some biased
	    trial.numberFocalColor = _.shuffle(someBiased)[0]
	} else if (quant === 'some' && bias === 'unbiased') { // some unbiased
	    trial.numberFocalColor = _.shuffle(someUnbiased)[0]
	} else if (quant === 'all' && bias === 'biased') { // all biased
	    trial.numberFocalColor = _.shuffle(allBiased)[0]
	} else if (quant === 'all' && bias === 'unbiased') { // all unbiased
	    trial.numberFocalColor = _.shuffle(allUnbiased)[0]
	}
	
	var shuffledShapes = _.shuffle(shapes)
	trial.focalShape = shuffledShapes[0]
	trial.otherShape = shuffledShapes[1]
	
	var shuffledColors = _.shuffle(colors)
	trial.focalColor = shuffledColors[0]
	trial.otherColor = shuffledColors[1]

	trial.side = _.shuffle(['left', 'right'])[0]
	
	trial.sentence = _.capitalize(trial.quant) + " of the " + trial.focalShape + "s in this picture are " + trial.focalColor + " in color."
	trial.QUD = "Which kinds of shapes in this pictures are red or blue in color?"

	return trial
	
    };
    
    // function that shuffles the items in a list
    var shuffleComb = function(comb) {
	var counter = comb.length;

	while (counter > 0) {
	    let index = Math.floor(Math.random() * counter);
	    counter--;

	    let temp = comb[counter];
	    comb[counter] = comb[index];
	    comb[index] = temp;
	}

	return comb;
    };

	var practice_trials = [
	    {sentence: "Some of the triangles in this picture are white in color.", quant: 'some',
	     focalShape: 'triangle', focalColor: 'red', otherColor: 'blue', otherShape: 'square',
	     numberFocalColor: {focalColor_focalObject: 4, focalColor_otherObject: 8}, 'side': 'right',
	     QUD: "Which kinds of shapes in this picture are red or blue in color?"},
	    {sentence: "All of the squares in this picture are black in color.", quant: 'all',
	     focalShape: 'square', focalColor: 'blue', otherColor: 'red', otherShape: 'circle',
	     numberFocalColor: {focalColor_focalObject: 8, focalColor_otherObject: 0}, 'side': 'left',
	     QUD: "Which kinds of shapes in this picture are red or blue in color?"}
	];

    // each time initExp() is called, items in data.trials are shuffled
    data.trials = _.map(_.shuffle(logicalConditions), function(cond) {
	return createTrialByLogicalType(cond.split(",")[0],
    	cond.split(",")[1])})
    data.practice_trials = practice_trials;
    data.out = [];
    
    console.log(data.trials);

    return data;
};

