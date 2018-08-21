require('dotenv').config();
const express = require('express');

function handleRedirect(req, res) {
  res.redirect(process.env.REDIRECT_URI);
}

const app = express();
app.get('*', handleRedirect);
app.listen(process.env.PORT || 3000);
