let express = require('express');
let bodyParser = require('body-parser');
const url = require('url');
let querystring = require('querystring');
let cookieParser = require('cookie-parser');
// var getDataRouter = require( ' ./routes/getData ' );


let app = express();

app.use(bodyParser.urlencoded({ extended : false}));

app.engine('pug', require('pug').__express)
app.set('view engine' , 'pug');

let mainRoutes = require('./routes');
// let cardRoutes = require('./routes/cards');   // ./ 代表呼叫這個目錄下的檔案


app.use(mainRoutes);
// app.use('/cards', cardRoutes);
// app.use( ' /getData ' , getDataRouter);




//讓localhost 吃到index資料
app.get('/' , (req , res) => {
    res.render('index');
});

//Assignment 4: HTTP Cookie

app.get('/myName' , (req , res) => {
    res.render('hello');
});

app.post('/myName' , (req , res) => {
    res.cookie('username', req.body.username );
    res.render('hello', { name: req.body.username });
});




//appworks mission - Assignment 2: 


//瀏覽器網址：http://localhost:3000/getData?number=5
app.get('/getData', (req , res) => {
    let number = req.query.number;
    res.end(inputData(number));
    if(typeof(number)=='number'){
        number = 1, number++

    };

});





// document.write(typeof(number));　

function inputData(number) { 
  
    let alert="Lack of Parameter"; //預設為空值
  
    if(typeof(number)=='string'){  //判斷為字串
      alert="Wrong Parameter";
      }else if(typeof(number)=='number'){ //判斷為正整數
          // [[  算總和  ]]
          let max = number;
          let sum = 0;
          for (let i = 1; i < max; i++) {
                  sum += i;
                   // /getData?number=正整數
              }
          alert = sum;
      }
     return alert;
  }






app.get('/endpoint', function(request, response) {
    let name = request.query.name;
    response.end("I have received the ID: " + name);
});
//在瀏覽器中訪問： http://localhost:3000/endpoint?id=something


// app.get('/hi/:param1', function(req,res){
//     let {qs1: "you" , qs2: "tube"} = req.query;
//     let {param1: "there"} = req.params;
// } );





app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});

