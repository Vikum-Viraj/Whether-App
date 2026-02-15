require('dotenv').config();
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: process.env.OAUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.OAUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256'
});

module.exports = checkJwt;
