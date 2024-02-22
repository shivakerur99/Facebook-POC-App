const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		// mongoose.connect(, connectionParams);
		mongoose.connect('mongodb+srv://shivakerur99:shivanand99805257@cluster0.usva3cf.mongodb.net/richpanel', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
