require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('body-parser');
const massive = require('massive');
const controller = require('../controller');


const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    
    //   db.new_planes().then(planes => console.log(planes))
    //     .catch(err => console.error(err));
    // }).catch(err => console.error(err));

        // db.get_planes().then(planes => {console.log(planes)})
        //     .catch(err => console.error(err));
        // }).catch(err => console.error(err));
    });

app.get('/api/', controller.getbins);


const port = 3333
app.listen(port, () => console.log(`listening on port ${port}`));

