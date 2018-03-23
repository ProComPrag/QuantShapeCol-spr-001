var config = {
	// mandatory fields - author, experiment_id, description
	"author": "Vinicius M Silva",
	"experiment_id": "spr-pilot",
	"description": "Pilot version of a self-paced reading study focused on scalar implicature processing",
	"liveExperiment": true,
	"contact_email": "vini.macuch@gmail.com",
	// submission settings
	// set "is_MTurk" to true if the experiment is run in MTurk
	"is_MTurk": true,
	// mturk's HIT submission url
	// specify the submission url if "is_MTurk" is set to true otherwise leave blank
	// the url for the sandbox and the live experiments are different (https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ExternalQuestionArticle.html)
	/*"MTurk_server": "https://workersandbox.mturk.com/mturk/externalSubmit",*/
	"MTurk_server": "https://www.mturk.com/mturk/externalSubmit",

	// experiment settings
	"expSettings": {
		// set "hideImage" to true if the image should dissapear
		"hideImage": true,
		// for how long the image is shown before it dissapears in ms (1000 ms = 1 sec)
		// needed if "hideImage" is set to true
		"showDuration": 2500,
		// set to true to make the the sentence underline one continous line or to false to make the words separated by spaces
		"underlineOneLine": false,
		// blank screen before the image and sentence underline shows
		// set to 0 if there shouldn't be a pause
		"pause": 700
	},

	// intro view
	"intro": {
		// introduction title
		"title": "Welcome!",
		// introduction text
		"text": "Thank you for participating in our study. In this study, you will answer questions about 24 sentences that describe images. To participate in the experiment, please first accept the HIT. By answering the following questions, you are participating in a study being performed by scientists from the Eberhard Karls University of Tübingen. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.",
		// instroduction's slide proceeding button
		"buttonText": "Begin experiment"
	},

	// instructions view
	"instructions": {
		// instruction's title
		"title": "Instructions",
		// instruction's text
		"text": "Each trial, you will see a picture on screen depicting shapes colored in either black or white. You will then have to press the space bar to reveal bits of a sentence which you have to read. After reading the sentence, you will be asked if you agree or disagree with what you just read. Select one of the options and you will be directed to the next trial.",
		// instuction's slide proceeding button text
		"buttonText": "Go to practice trial"
	},

	// practice trial view
	"practice": {
		"title": "Practice trial"
	},

	// begin experiment view
	"beginExp": {
		"text": "Now that you have acquainted yourself with the procedure of the task, the actual experiment will begin."
	},

	// subject info view
	"subjInfo": {
		"title": "Additional Info",
		"text": "Answering the following questions is optional, but will help us understand your answers.",
		"buttonText": "Continue",
	},

	// thanks view
	"thanks": {
		"message": "Thank you for taking part in this experiment!"
	}
}
