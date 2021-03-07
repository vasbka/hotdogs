let express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const db = require('./models/sequalize')

db.sequalize.authenticate()
    .then(() => console.log('Database connected..'))
    .catch(err => console.log(err));

let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors());
require("./routes/hotdogs.routes")(app);

app.listen(PORT, () => {

})
