import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Sample data array for posts
const posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "Sat May 16 2024 20:52:54 GMT+0100 (West Africa Standard Time)"
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "Sat May 18 2024 9:52:54 GMT+0100 (West Africa Standard Time)"
  }
];

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', (req, res) => {
  res.render('index.ejs', { posts: posts });
  // res.send('hello')
})

app.post('/submit', (req, res) => {
  const infoHead = req.body.header;
  const infoContent = req.body['content'];
  let getDate = new Date();
  // Add the new post to the posts array
  posts.push({ title: infoHead, content: infoContent, date: getDate });

  res.render('index.ejs', { posts: posts });
})

app.get('/edit/:id', (req, res) => {
  const pathParams = req.path;
  console.log(pathParams);
  res.render("index.ejs", { posts: posts });
})

app.get('/delete/:id', (req, res) => {
  const pathParams = req.path;
  console.log(pathParams);
  res.render("index.ejs", { posts: posts });
})

app.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
})