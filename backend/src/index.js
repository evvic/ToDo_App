import Express from "express";
import faker from "faker";


const app = Express(); 
const port = 5050;




 app.get("/task", (req,res) => {

    res.json({name :faker.name.firstName(), created :Date(), completed :null})
    

 })

 

app.listen(port, () => console.log("listening on port" + port))







/*
const port = process.env.PORT || 5050;
app.listen(port, () => {
  /* eslint-disable no-console */
  //console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
//});