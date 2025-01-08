import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override'

// dynamical file path
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname);

const app = express();
const port = 3001;

// Sample data array for posts
let id = 1;
let posts = [
  {
    id: 1686970950485786,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "Sat May 16 2024 20:52:54 GMT+0100 (West Africa Standard Time)"
  },
  {
    id: 254459786984668,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "Sat May 18 2024 9:52:54 GMT+0100 (West Africa Standard Time)"
  }
];

app.use(express.static(__dirname + '/public'));// handle all static file(unchanged file)
app.use(bodyParser.urlencoded({extended:true}));// handle form data in express NB: It can still work using "express.urlencoded({extended:true})"
app.use(methodOverride('_method'))// override method using a query value

/////////////////////////////////////////////////////////////
// GET BLOGS
app.get('/', (req, res) => {
  res.render('index.ejs', { posts: posts });
})

/////////////////////////////////////////////////////////////
// POSTING OR ADDING BLOG OR POST
app.post('/post', (req, res) => {
  console.log(req.body);
  const { title, author, content } = req.body
  
  let getDate = new Date();
  // Add the new post to the posts array
  posts.push({ id: id++, title: title, author: author, content: content,  date: getDate });

  res.redirect('/');
})

/////////////////////////////////////////////////////////////
// UPDATE ROUTE
app.get('/posts/:id/edit', (req, res) => {
  const { id } = req.params
  const post = posts.find(post => post.id === parseInt(id));
  // console.log(post);
  
  res.render('edit.ejs', { post });
})

//HANDLE UPDATE USING "PUT" METHOD
app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find(post => post.id === parseInt(id));
  const { title, author, content} = req.body;
  const hh = req.body;
  console.log(hh);
  if (post) {
    post.title = title;
    post.author = author;
    post.content = content;
  }
  res.redirect('/');
})

//////////////////////////////////////////////////////////////
// DELETE EACH BLOG POST
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  
  posts = posts.filter(postDel => postDel.id !== parseInt(id));
  console.log(posts);
  
  res.redirect('/');
})

app.listen(port, (req, res) => {
  console.log(`Listening at port ${port}`);
})