import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Sample data array for posts
const posts = [];

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', (req, res) => {
    res.render('index.ejs', { posts });
    // res.send('hello')
})
app.post('/submit', (req, res) => {
    const infoHead = req.body['header'];
    const infoContent = req.body['content'];
    // Add the new post to the posts array
    posts.push({ title: infoHead, content: infoContent });

    res.render('index.ejs', { posts });
    // res.send('hello')
    // console.log(req.body);
    // console.log(req.body['content']);

    // console.log(posts); // Log the updated posts array
})
app.listen(port, (req, res) => {
    console.log(`Listening at port ${port}`);
})