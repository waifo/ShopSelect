var express=require('express');
var bodyParser = require('body-parser');
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import App from './app/App';
import template from './template';
import { StaticRouter } from 'react-router-dom'

var app=express();
var context={}
app.use(express.static("dist"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 5000));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',function(req,res){
    const appString = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  );
      res.send(template({
        body: appString,
        title: 'ShopSelect Server'
      })); 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});