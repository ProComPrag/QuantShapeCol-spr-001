// initExp() creates and returns an object ('data') where the experiment's info is stored.
// data.trials - a list of objects containing the trial info that is needed for each slide
// of the experiment.
var initExp = function() {
	var data = {};

	var someBiased = ['0, 4', '4, 8', '8, 4', '4, 0'];
	var someUnbiased = ['4, 4'];
	var allBiased = ['8, 4', '0, 4', '4, 8', '4, 0'];
	var allUnbiased = ['8, 0', '8, 0'];

	var addImageInfo = function(trialsList) {
		for (var i = 0; i < trialsList.length; i++) {
			if (trialsList[i]['quant'] === 'some' && trialsList[i]['bias'] === 'unbiased') {
				trialsList[i]['numberBlack'] = shuffleComb(someUnbiased)[0];
			} else if (trialsList[i]['quant'] === 'some' && trialsList[i]['bias'] === 'biased') {
				trialsList[i]['numberBlack'] = shuffleComb(someBiased)[0];
			} else if (trialsList[i]['quant'] === 'all' && trialsList[i]['bias'] === 'unbiased') {
				trialsList[i]['numberBlack'] = shuffleComb(allUnbiased)[0];
			} else if (trialsList[i]['quant'] === 'all' && trialsList[i]['bias'] === 'biased') {
				trialsList[i]['numberBlack'] = shuffleComb(allBiased)[0];
			}
		}

		return trialsList;
	};

	var trials_raw = [
		// draw SHAPE COLOUR times on the left
		{sentence: "Some of the squared shapes are white", quant: 'some', shape: 'squared', color: 'white', bias: 'unbiased', 'side': 'left'},
		{sentence: "Some of the circular shapes are white", quant: 'some', shape: 'circular', color: 'white', bias: 'unbiased', 'side': 'left'},
		{sentence: "Some of the triangular shapes are white", quant: 'some', shape: 'triangular', color: 'white', bias: 'unbiased', 'side': 'left'},
		{sentence: "Some of the squared shapes are black", quant: 'some', shape: 'squared', color: 'black', bias: 'unbiased', 'side': 'left'},
		{sentence: "Some of the circular shapes are black", quant: 'some', shape: 'circular', color: 'black', bias: 'unbiased', 'side': 'left'},
		{sentence: "Some of the triangular shapes are black", quant: 'some', shape: 'triangular', color: 'black', bias: 'unbiased', 'side': 'left'},

		{sentence: "Some of the squared shapes are black", quant: 'some', shape: 'squared', color: 'black', bias: 'biased', 'side': 'right'},
		{sentence: "Some of the circular shapes are black", quant: 'some', shape: 'circular', color: 'black', bias: 'biased','side': 'left'},
		{sentence: "Some of the triangular shapes are black", quant: 'some', shape: 'triangular', color: 'black', bias: 'biased', 'side': 'right'},
		{sentence: "Some of the squared shapes are white", quant: 'some', shape: 'squared', color: 'white', bias: 'biased', 'side': 'right'},  
		{sentence: "Some of the circular shapes are white", quant: 'some', shape: 'circular', color: 'white', bias: 'biased', 'side': 'left'},
		{sentence: "Some of the triangular shapes are white", quant: 'some', shape: 'triangular', color: 'white', bias: 'biased', 'side': 'right'},

		{sentence: "All of the squared shapes are black", quant: 'all', shape: 'squared', color: 'black', bias: 'unbiased', 'side': 'right'},
		{sentence: "All of the circular shapes are white", quant: 'all', shape: 'circular', color: 'white', bias: 'unbiased', 'side': 'left'},
		{sentence: "All of the triangular shapes are black", quant: 'all', shape: 'triangular', color: 'black', bias: 'unbiased', 'side': 'right'},
		{sentence: "All of the circular shapes are black", quant: 'all', shape: 'circular', color: 'black', bias: 'unbiased', 'side': 'left'},
		{sentence: "All of the squared shapes are white", quant: 'all', shape: 'squared', color: 'white', bias: 'unbiased', 'side': 'right'},
		{sentence: "All of the triangular shapes are white", quant: 'all', shape: 'triangular', color: 'white', bias: 'unbiased', 'side': 'right'},

		{sentence: "All of the squared shapes are black", quant: 'all', shape: 'squared', color: 'black', bias: 'biased', 'side': 'right'},
		{sentence: "All of the circular shapes are black", quant: 'all', shape: 'circular', color: 'black', bias: 'biased', 'side': 'left'},
		{sentence: "All of the triangular shapes are black", quant: 'all', shape: 'triangular', color: 'black', bias: 'biased', 'side': 'left'},
		{sentence: "All of the squared shapes are white", quant: 'all', shape: 'squared', color: 'white', bias: 'biased', 'side': 'right'},
		{sentence: "All of the circular shapes are white", quant: 'all', shape: 'circular', color: 'white', bias: 'biased', 'side': 'left'},
		{sentence: "All of the triangular shapes are white", quant: 'all', shape: 'triangular', color: 'white', bias: 'biased', 'side': 'left'}
	];

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
	data.trials = shuffleComb(addImageInfo(trials_raw));

	console.log(data.trials);

	return data;
};

var practice_trials = [
	{sentence: "Some of the triangular shapes are white", quant: 'some', shape: 'triangular', color: 'white', numberBlack: '8, 4', 'side': 'right'},
	{sentence: "All of the squared shapes are black", quant: 'all', shape: 'squared', color: 'black', numberBlack: '0, 8', 'side': 'right'}
];