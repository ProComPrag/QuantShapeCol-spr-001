// initExp() creates and returns an object ('data') where the experiment's info is stored.
// data.trials - a list of objects containing the trial info that is needed for each slide
// of the experiment.
var initExp = function() {
	var data = {};

	var trials_raw = [
		// draw SHAPE COLOUR times on the left
		{sentence: "Some of the squared shapes are white", quant: 'some', shape: 'squared', color: 'white', numberBlack: '4, 4', 'side': 'left'},
		{sentence: "Some of the circular shapes are white", quant: 'some', shape: 'circular', color: 'white', numberBlack: '4, 4', 'side': 'left'},
		{sentence: "Some of the triangular shapes are white", quant: 'some', shape: 'triangular', color: 'white', numberBlack: '4, 4', 'side': 'left'},
		{sentence: "Some of the squared shapes are black", quant: 'some', shape: 'squared', color: 'black', numberBlack: '4, 4', 'side': 'left'},
		{sentence: "Some of the circular shapes are black", quant: 'some', shape: 'circular', color: 'black', numberBlack: '4, 4', 'side': 'left'},
		{sentence: "Some of the triangular shapes are black", quant: 'some', shape: 'triangular', color: 'black', numberBlack: '4, 4', 'side': 'left'},
		{sentence: "Some of the squared shapes are black", quant: 'some', shape: 'squared', color: 'black', numberBlack: '0, 4', 'side': 'right'},
		{sentence: "Some of the circular shapes are black", quant: 'some', shape: 'circular', color: 'black', numberBlack: '4, 0','side': 'left'},
		{sentence: "Some of the triangular shapes are black", quant: 'some', shape: 'triangular', color: 'black', numberBlack: '0, 4', 'side': 'right'},
		{sentence: "Some of the squared shapes are white", quant: 'some', shape: 'squared', color: 'white', numberBlack: '8, 4', 'side': 'right'},  
		{sentence: "Some of the circular shapes are white", quant: 'some', shape: 'circular', color: 'white', numberBlack: '4, 8', 'side': 'left'},
		{sentence: "Some of the triangular shapes are white", quant: 'some', shape: 'triangular', color: 'white', numberBlack: '8, 4', 'side': 'right'},
		{sentence: "All of the squared shapes are black", quant: 'all', shape: 'squared', color: 'black', numberBlack: '0, 8', 'side': 'right'},
		{sentence: "All of the circular shapes are white", quant: 'all', shape: 'circular', color: 'white', numberBlack: '0, 8', 'side': 'left'},
		{sentence: "All of the triangular shapes are black", quant: 'all', shape: 'triangular', color: 'black', numberBlack: '0, 8', 'side': 'right'},
		{sentence: "All of the circular shapes are black", quant: 'all', shape: 'circular', color: 'black', numberBlack: '8, 0', 'side': 'left'},
		{sentence: "All of the squared shapes are white", quant: 'all', shape: 'squared', color: 'white', numberBlack: '8, 0', 'side': 'right'},
		{sentence: "All of the triangular shapes are white", quant: 'all', shape: 'triangular', color: 'white', numberBlack: '8, 0', 'side': 'right'},
		{sentence: "All of the squared shapes are black", quant: 'all', shape: 'squared', color: 'black', numberBlack: '4, 8', 'side': 'right'},
		{sentence: "All of the circular shapes are black", quant: 'all', shape: 'circular', color: 'black', numberBlack: '8, 4', 'side': 'left'},
		{sentence: "All of the triangular shapes are black", quant: 'all', shape: 'triangular', color: 'black', numberBlack: '8, 4', 'side': 'left'},
		{sentence: "All of the squared shapes are white", quant: 'all', shape: 'squared', color: 'white', numberBlack: '4, 0', 'side': 'right'},
		{sentence: "All of the circular shapes are white", quant: 'all', shape: 'circular', color: 'white', numberBlack: '0, 4', 'side': 'left'},
		{sentence: "All of the triangular shapes are white", quant: 'all', shape: 'triangular', color: 'white', numberBlack: '0, 4', 'side': 'left'}
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
	data.trials = shuffleComb(trials_raw);

	return data;
};

var practice_trials = [
	{sentence: "Some of the triangular shapes are white", quant: 'some', shape: 'triangular', color: 'white', numberBlack: '8, 4', 'side': 'right'},
	{sentence: "All of the squared shapes are black", quant: 'all', shape: 'squared', color: 'black', numberBlack: '0, 8', 'side': 'right'}
];