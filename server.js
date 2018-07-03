// import express from 'express';
// import path from 'path';

const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('dist'));

app.listen(port);
console.log('Server is now running');
