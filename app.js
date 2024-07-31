// insecure-app/app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <label>Username:</label><br>
            <input type="text" name="username"><br>
            <label>Password:</label><br>
            <input type="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Logged in with username: ${username} and password: ${password}`);
});

app.listen(3000, () => {
    console.log('Insecure app listening on port 3000');
});