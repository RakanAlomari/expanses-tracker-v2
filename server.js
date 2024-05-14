const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const User = require("./models/User");
const path = require("path");
const flash = require("connect-flash");
const app = express();
const ins = require("./models/ins");




app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: "your_secret_key", 
  resave: false,
  saveUninitialized: true
}));

app.post("/create", function(req, res) {
    const { name, email, phone, username, password } = req.body;
    const newUser = new User({
        name: name,
        email: email,
        phone: phone,
        username: username,
        password: password
    });

    newUser.save()
        .then(savedUser => {
            res.redirect("p3.html");
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Route for updating user information
app.post("/updateUser", function(req, res) {
  const { name, email, phone, username } = req.body;

  // Find the user by username and update the information
  User.findOne({ username })
      .then(user => {
          if (!user) {
              return res.status(404).send("User not found");
          }

          // Update the user's information
          user.name = name;
          user.email = email;
          user.phone = phone;

          return user.save();
      })
      .then(updatedUser => {
          // If user is updated successfully, redirect to the profile page
          res.redirect("p6.html");
      })
      .catch(err => {
          console.error("Error updating user:", err);
          res.status(500).send("Internal server error");
      });
});


app.post("/login", function(req, res) {
    const { username, password } = req.body;
    User.findOne({ username, password })
        .then(user => {
            if (user) {
                res.redirect("p3.html");
            } else {
                res.json({message :"invalid passwrd or username "})
            }
        })
        .catch(err => {
            console.error("Error querying database:", err);
            res.status(500).send("Internal server error");
        });
});
app.post("/cerate_institution", function(req, res) {
  const { name, id, password ,a} = req.body;
  const newIns = new ins({
      
    id: id,
    name: name,
      a: a,
      password: password

  });
  newIns.save()
        .then(savedUser => {
            res.redirect("p3.html");
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.post("/Login_ins", function(req, res) {
  const { id, password } = req.body;
  ins.findOne({ id, password })
      .then(user => {
          if (user) {
              res.redirect("p3.html");
          } else {
              res.json({message :"invalid passwrd or username "})
          }
      })
      .catch(err => {
          console.error("Error querying database:", err);
          res.status(500).send("Internal server error");
      });
});

// Start the server
const PORT = process.env.PORT || 1000;
app.listen(PORT, function() {
    console.log(`Listening to port ${PORT}`);
});
