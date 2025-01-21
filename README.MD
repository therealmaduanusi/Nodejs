# Simple Blog 
simple blog is blog that is simple 😁 it create, delete and edit post made by the user.

## Tools
- ejs
- css
- express
- vscode

### code
```js
app.get('/', (req, res) => {
  res.render('index.ejs', { posts: posts });
});
```
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F0F8FF;
}
```
```html
<header>
    <h1>Simple Blog</h1>
    <button id="addPostBtn" class="btn btn-primary">Add Post</button>
</header>
```
#### EJS
- EJS stands for **E**mbedded **J**ava**S**cript.
- A template language that also help in writing js code and recieving data from the server
- it like HTML **H**yper**T**ext**M**arkup**L**anguage
- js code are written using anglebracket attached with a percentage sign (**<% js code goes here %>**)

> [!IMPORTANT]
> It hosted on vercel
