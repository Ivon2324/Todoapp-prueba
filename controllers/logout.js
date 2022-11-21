const { request, response } = require('express');

const logoutRuoter = require('express').Router();

logoutRuoter.get('/', async (request, response) => {
  const cookies = request.cookies;

  if (!cookies.accessToken) return response.sendStatus(401);

  response.clearCookie('accessToken', {
    secure: false,
    httpOnly: true,
  });

  response.sendStatus(204);
});

module.exports = logoutRuoter;
