let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let port = 3000;

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('./public'))

app.listen(port, () => {
  console.log('listening on port', port)
});