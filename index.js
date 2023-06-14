const express = require("express");
const app = express();
const port = 3010;


// code for middleware
const checkAuth = (req, res, next) => {
	if (req.isChecked) {
    return res.status(401).send(`You're not authenticated`)
	}

	next();
};

// post request
app.get('/check', checkAuth, (req, res) => {
  res.send('Authentication successfull')
})

app.listen(port, () => {
	console.log(`app running at port ${port}`);
});
