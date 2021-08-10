import express from 'express';

const app = express();

// Set view engine
app.set('view engine', 'ejs');

app.get('/fruit', (request, response) => {
  // Obtain data to inject into EJS template
  const data = {
    fruit: {
      name: 'banana',
      color: 'green'
    },
  };
  // Return HTML to client, merging "index" template with supplied data.
  response.render('fruit', data);
});

app.get('/fruit/:name', (req, res)=>{
  const data= {
    fruit: {
      name :req.params.name
    }
  }
  res.render('fruit', data);
})

app.get('/bananas', (request, response) => {
  // data contains an array of elements, each representing 1 user
  const data = {
    users: [{ name: 'kai' }, { name: 'jim' }, { name: 'susan' }],
    fruit:{
      
    }
  };
  response.render('fruit', data);
});

app.listen(3004);