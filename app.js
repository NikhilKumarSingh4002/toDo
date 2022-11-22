import express from "express";
import bodyParser from "body-parser";
import path from "path";
const app=express();
var __dirname=path.resolve();

var items=["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  
      var today=new Date();
      var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
      };
  
      var day = today.toLocaleDateString("en-US", options);
     
  
    
    res.render("list", {kindOfDay: day, newListItem : items});
    app.post("/",(req,res)=>{
      var item = req.body.newItem; 
      items.push(item);
       res.redirect("/");
    });
  });


app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});