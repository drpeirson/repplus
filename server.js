const express = require('express');
const app = express();

const settings = {
  httpPort: 4000
}

app.use(express.static('public'));
app.listen(settings.httpPort, () => {
  console.log(`Server running at http://localhost:${settings.httpPort}`);
});