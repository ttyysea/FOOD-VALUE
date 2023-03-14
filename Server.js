var express = require('express')
var cors = require('cors')
var app = express()
const bodyParser = require('body-parser');



app.use(bodyParser.json());

const mysql = require('mysql2');
const { Router } = require('express');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodvalue'
});

app.use(cors())

app.get('/api/attractions', function (req, res, next) {
    connection.query(
    'SELECT * FROM food',
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/attractions/:id', function (req, res, next){
    const id = req.params.id
    connection.query(
        'SELECT * FROM food WHERE id = ?',
        [id],
        function(err, results){
            res.json(results[0]);
        }
    )
})

app.get('/api/northfood', function (req, res, next) {
    connection.query(
      `SELECT * FROM food WHERE typefood LIKE '%ภาคเหนือ%'`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/northfood4', function (req, res, next) {
    connection.query(
      `SELECT * FROM food WHERE typefood LIKE '%ภาคเหนือ%' LIMIT 4`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/southfood', function (req, res, next) {
    connection.query(
    `SELECT * FROM food WHERE typefood LIKE '%ภาคใต้%'`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/southfood4', function (req, res, next) {
    connection.query(
    `SELECT * FROM food WHERE typefood LIKE '%ภาคใต้%' LIMIT 4`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/northeastfood', function (req, res, next) {
    connection.query(
    `SELECT * FROM food WHERE typefood LIKE '%ภาคอีสาน%'`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/northeastfood4', function (req, res, next) {
    connection.query(
    `SELECT * FROM food WHERE typefood LIKE '%ภาคอีสาน%' LIMIT 4`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/centralfood', function (req, res, next) {
    connection.query(
    `SELECT * FROM food WHERE typefood LIKE '%ภาคกลาง%'`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/api/centralfood4', function (req, res, next) {
    connection.query(
      `SELECT * FROM food WHERE typefood LIKE '%ภาคกลาง%' LIMIT 4`,
    function(err, results, fields) {
        res.json(results) 
    }
    );
})

app.get('/food', (req, res) => {
  connection.query('SELECT * FROM food LIMIT 5', (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});

// Set up a route for searching the database for specific food items
app.get('/food/search', (req, res) => {
  const searchTerm = req.query.q;
  connection.query(
    'SELECT * FROM food WHERE foodname LIKE ?',
    ['%' + searchTerm + '%'],
    (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.sendStatus(500);
        return;
      }
      res.json(results);
    }
  );
});


app.get('/api/attractions/restaurant/:id', function (req, res, next) {
    const id = req.params.id
    connection.query(
        'SELECT food.*, restaurant.* FROM food JOIN food_has_restaurant ON food_has_restaurant.food_id = food.id JOIN restaurant ON food_has_restaurant.restaurant_id = restaurant.idres WHERE food.id = ?',
        [id],
        function(err, results, fields) {
        res.json(results); 
        }
    );
})

app.get('/api/attractions/map/:id', function (req, res, next) {
    const id = req.params.id
    connection.query(
        'SELECT food.*, restaurant.* FROM food JOIN food_has_restaurant ON food_has_restaurant.food_id = food.id JOIN restaurant ON food_has_restaurant.restaurant_id = restaurant.idres WHERE food.id = ?',
        [id],
        function(err, results, fields) {
        res.json(results[0]); 
        }
    );
})

app.get('/api/attractions/restaurantFood/:id', function (req, res, next) {
    const id = req.params.id
    connection.query(
        'SELECT food.*, restaurant.* FROM food JOIN food_has_restaurant ON food_has_restaurant.food_id = food.id JOIN restaurant ON food_has_restaurant.restaurant_id = restaurant.idres WHERE food.id = ?',
        [id],
        function(err, results, fields) {
        res.json(results[0]); 
        }
    );
})

app.get('/api/attractions/restaurantFoodFood/:id/:idres', function (req, res, next) {
  const id = req.params.id
  const idres = req.params.idres
  connection.query(
      'SELECT food.*, restaurant.* FROM food JOIN food_has_restaurant ON food_has_restaurant.food_id = food.id JOIN restaurant ON food_has_restaurant.restaurant_id = restaurant.idres WHERE food.id = ? AND restaurant.idres = ?',
      [id,idres],
      function(err, results, fields) {
      res.json(results[0]); 
      }
  );
})

app.get('/api/lovefood', function (req, res, next) {
    connection.query(
        'select * from food join lovefood on food.id = lovefood.food_id',
        function(err, results, fields) {
        res.json(results); 
        }
    );
})




app.post('/api/addlovefood/:id', function (req, res, next) {
    const id = req.params.id
    connection.query(
        'INSERT INTO lovefood (food_id) SELECT id FROM food WHERE food.id = ?',
        [id],
        function(err, results, fields) {
        res.json(results[0]); 
        }
    );
})

app.delete('/api/deletelovefood/:id', function (req, res, next) {
    const id = req.params.id
    connection.query(
        'DELETE FROM lovefood WHERE lovefood.food_id = ?',
        [id],
        function(err, results, fields) {
        res.json(results); 
        }
    );
})

app.post('/api/register', function (req, res, next) {
  const { username, password, email } = req.body;
  connection.query(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, password, email],
      function(err, results, fields) {
      res.json(results); 
      }
  );
})

app.post('/register', (req, res) => {
  const { username, password, email, userid } = req.body;
  const query = `INSERT INTO users (username, password, email, userid) VALUES (?, ?, ?, ?)`;
  const values = [username, password, email, userid];

  // Insert the new user into the database
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json({ message: 'User registered successfully'});
  });
});



app.post('/inputprofile/:userid', (req, res) => {
  const { firstname, lastname, age, height, weight, userid} = req.body;
  const query = `UPDATE users SET firstname = ?, lastname = ?, age = ?, height = ?, weight = ? WHERE userid = ?`;
  const values = [firstname, lastname, age, height, weight, userid];

  // Update the user's information in the database
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json({ message: 'Input Profile successfully' });
  });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if the username and password are valid
    connection.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password],
      (error, results) => {
        if (error) {
          return res.status(500).json({ success: false, message: error });
        }
        if (results.length > 0) {
          return res.json({ success: true, user: results[0] });
        }
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    );
  });

  app.delete('/api/lovefood', (req, res) => {
    const { food_id, users_userid } = req.query;
    connection.query(
      'DELETE FROM lovefood WHERE food_id = ? AND users_userid = ?',
      [food_id, users_userid],
      (error, results) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.json({ success: true });
        }
      }
    );
  });
  
  // POST route to add a "like" to the lovefood table
  app.post('/api/lovefood', (req, res) => {
    const { food_id, users_userid, status } = req.body;
    connection.query(
      'INSERT INTO lovefood (food_id, users_userid, status) VALUES (?, ?, ?)',
      [food_id, users_userid, status],
      (error, results) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.json({ success: true });
        }
      }
    );
  });
  
app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})
