const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
const db = require('./models')

//Routers 
const postRouter = require('./routes/Posts')
app.use("/posts",postRouter)
const commentsRouter = require('./routes/Comments')
app.use("/comments",commentsRouter)

db.sequelize.sync().then(()=>{
    app.listen(4000, ()=>{
        console.log("Server is running at port 4000")
    });
})
