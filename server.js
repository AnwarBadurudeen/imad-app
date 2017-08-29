var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
  'article-one':{
    title:'Article one page',
    heading:'Article one',
    date:'sep 5,2017',
    content:` <p>This is my written webpage to the hasura website This is my written webpage to the hasura website
            This is my written webpage to the hasura website</p>
            <p>This is my written webpage to the hasura website This is my written webpage to the hasura website
            This is my written webpage to the hasura website</p>
            <p>This is my written webpage to the hasura website This is my written webpage to the hasura website
            This is my written webpage to the hasura website</p>`
},
  'article-two':{
    title:'Article two page',
    heading:'Independence Day',
    date:'Aug 15,2017',
    img:'<img src="http://1.bp.blogspot.com/-23hp3tqIty0/VVYcaJYWBkI/AAAAAAAAADA/tZZTCSwQAYE/s640/Independence+day+Quotes+2015+In+English-1+(4).jpg" hight="50%" width="50%">',
    content:`  
    <ul><li><p>Every human has four endowments - self awareness, conscience, independent will and creative imagination. These give us the ultimate human freedom... The power to choose, to respond, to change.</p></li><br><br>
           <li> <p>Violence as a way of achieving racial justice is both impractical and immoral. I am not unmindful of the fact that violence often brings about momentary results. Nations have frequently won their independence in battle. But in spite of temporary victories, violence never brings permanent peace.</p></li></ul>
           `

},   
  'article-three':{
    title:'Article three page',
    heading:'Article three',
    date:'sep 5,2017',
    content:` <p>This is my written webpage to the hasura website This is my written webpage to the hasura website
            This is my written webpage to the hasura website</p>
            <p>This is my written webpage to the hasura website This is my written webpage to the hasura website
            This is my written webpage to the hasura website</p>
            <p>This is my written webpage to the hasura website This is my written webpage to the hasura website
            This is my written webpage to the hasura website</p>`
}
};



function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var img=data.img;
    var content=data.content;
    var htmlTemplate=`<html>
   
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=divice-width, initial-scale=1"/>
      <link href="/ui/style.css" rel="stylesheet" />
        </head>
    <body>
    <div class="container">
        <div><a href="/">Home</a>&nbsp;&nbsp;&nbsp;
        <a href="/article-two">article-two</a>&nbsp;&nbsp;&nbsp;
        <a href="/article-three">article-three</a>&nbsp;&nbsp;&nbsp;</div>
        
        <hr/>
        
        <h3>${heading}</h3>
        
        <div>
            ${date}
        </div>
        <div class=center>
            ${img}
        </div><br>
       <div class="para">
           ${content}
        </div>
    </div>
    </body>


</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

//app.get('/article-three',function (req, res){
  // res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));  
//});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
