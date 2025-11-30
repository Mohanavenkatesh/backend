Express.js Code Explanation

Below is a beginner-friendly explanation of the Express.js code you wrote in your index.js file.

⸻

📌 1. Importing Express

const express = require("express");

	•	This line loads the Express library into your project.
	•	Express helps you create servers easily.

⸻

📌 2. Creating the App

const app = express();

	•	app is your server instance.
	•	You will use app to create routes like /, /hello, etc.

⸻

📌 3. GET Route: Home Page

app.get("/", (req, res) => {
  res.send("Welcome to my first Express server!");
});

What happens here:
	•	app.get() creates a route that responds to GET requests.
	•	"/" means the home page.
	•	(req, res) => { ... } is a function that runs when someone visits this route.
	•	res.send() sends plain text as the response.

⸻

📌 4. GET Route: Hello JSON

app.get("/hello", (req, res) => {
  res.json({ message: "Hello Mohan!" });
});

What happens here:
	•	This is another GET route, at /hello.
	•	res.json() sends a JSON object.
	•	APIs usually return JSON, so this is an important concept.

⸻

📌 5. Setting the Port Number

const PORT = 5000;

	•	Your server will run on localhost:5000.
	•	You can change this number if needed.

⸻

📌 6. Starting the Server

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});

What happens here:
	•	app.listen() starts your Express server.
	•	The server begins listening for requests.
	•	The callback function prints a message when the server starts.

⸻

🎉 Summary

Your Express server now:
	•	Responds with text at /
	•	Responds with JSON at /hello
	•	Runs on http://localhost:5000

This is first working backend API — great progress!