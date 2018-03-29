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
    
    var someBiased = ['0, 4', '4, 8', '8, 4', '4, 0'];
    var someUnbiased = ['4, 4'];
    var allBiased = ['8, 4', '0, 4', '4, 8', '4, 0'];
    var allUnbiased = ['8, 0', '8, 0'];

    var shapes = ['circular', 'triangular', 'squared'];
    var colors = ['black', 'white', 'red', 'blue', 'green'];

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
	    trial.numberBlack = _.shuffle(someBiased)[0]
	} else if (quant === 'some' && bias === 'unbiased') { // some unbiased
	    trial.numberBlack = _.shuffle(someUnbiased)[0]
	} else if (quant === 'all' && bias === 'biased') { // all biased
	    trial.numberBlack = _.shuffle(allBiased)[0]
	} else if (quant === 'all' && bias === 'unbiased') { // all unbiased
	    trial.numberBlack = _.shuffle(allUnbiased)[0]
	}
	
	var shuffledShapes = _.shuffle(shapes)
	trial.shape = shuffledShapes[0]
	trial.secondaryShape = shuffledShapes[1]
	
	var shuffledColors = _.shuffle(colors)
	trial.color = shuffledColors[0]
	trial.secondaryColor = shuffledColors[1]

	trial.side = _.shuffle(['left', 'right'])[0]
	
	trial.sentence = _.capitalize(trial.quant) + " of the " + trial.shape + " shapes are " + trial.color + " in this picture"

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

    // each time initExp() is called, items in data.trials are shuffled
    data.trials = _.map(_.shuffle(logicalConditions), function(cond) {
	return createTrialByLogicalType(cond.split(",")[0],
    	cond.split(",")[1])})

    console.log(data.trials);

    return data;
};

var practice_trials = [
    {sentence: "Some of the triangular shapes are white in this picture", quant: 'some', shape: 'triangular', color: 'white', numberBlack: '8, 4', 'side': 'right'},
    {sentence: "All of the squared shapes are black in this picture", quant: 'all', shape: 'squared', color: 'black', numberBlack: '0, 8', 'side': 'right'}
];
