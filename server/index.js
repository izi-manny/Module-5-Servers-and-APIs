const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["Fear is the mind-killer. Action is the fear-killer",
      "Good times become good memories while bad times make good lessons",
      "Life happens wherever you are, whether you make it or not",
      "Passing this project brings good fortune",
      "Weeks of programming can save you hours of planning",
      "Without you, the world is NULL",
      "Be strong by knowing your weaknesses"
  ]

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)

});


app.listen(4000, () => console.log("Server running on 4000"));
