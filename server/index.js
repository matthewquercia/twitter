const express = require('express');
const cors = require('cors');

//pull in the connection to the database which will allow us to connect to the db
const pool = require('./db_connection');
const hasher = require('./bcrypter');

//create instance of express
const app = express();
//allow cross origin 
app.use(cors());
//allow the app to get access to the request.body (read JSON)
app.use(express.json());

//ROUTES
app.post("/newpost", async(req,res)=>{
    try {
        const newPost = await pool.query("INSERT INTO post (postDescription) VALUES($1) RETURNING *", [req.body.description]);
        res.json(newPost.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

app.get("/posts", async(req, res) => {
    try {
        const allPosts = await pool.query("SELECT * FROM post ORDER BY post_id DESC");
        //we dont need to say returning * because we are already selecting all todos
        res.json(allPosts.rows);
    } catch(err){
        console.log(err);
        res.status(500).send();
    }
})

app.get("/comments/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const allComments = await pool.query("SELECT * FROM comments WHERE post_id = $1", [id]);
        //we dont need to say returning * because we are already selecting all todos
        res.json(allComments.rows);
    } catch(err){
        console.log(err);
        res.status(500).send();
    }
})

app.post("/createcomment", async (req, res)=>{
    try{
        const newComment = await pool.query("INSERT INTO comments (commentdescription, post_id) VALUES($1, $2) RETURNING *", [req.body.description, req.body.post_id]);
        res.json(newComment.rows); //?
    } catch(err){
        console.log(err);
        res.status(500).send();
    }
});

app.post("/createuser", async (req, res)=>{
    try {
        const pass = await hasher.hashUsersPassword(req.body.password);
        const newUser = await pool.query("INSERT INTO users (username, password) VALUES($1, $2) RETURNING *", [req.body.username, pass]);
        res.json(newUser.rows); //?
    } catch(err){
        console.log(err);
        res.status(500).send();
    }
});

//LISTENER
app.listen(5000, () => {
    console.log("Listening on port 5000");
});