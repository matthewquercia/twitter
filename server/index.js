const express = require('express');
const cors = require('cors');

//pull in the connection to the database which will allow us to connect to the db
const pool = require('./db_connection');

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
    }
});

app.get("/posts", async(req, res) => {
    try {
        const allPosts = await pool.query("SELECT * FROM post");
        //we dont need to say returning * because we are already selecting all todos
        res.json(allPosts.rows);
    } catch(err){
        console.log(err);
    }
})

//LISTENER
app.listen(5000, () => {
    console.log("Listening on port 5000");
});