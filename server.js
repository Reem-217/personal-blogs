const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:"config.env"});
const DBconnect=require('./config/database');
const articleRoute=require('./routes/articleRoutes');
const cors=require('cors');
const ApiError=require('./utils/apiError');

const app=express();

//connect db
DBconnect();

app.use(express.json());
app.use(cors());

//Mount Routes
app.use('/api/atricels',articleRoute);

app.all('*', (req, res, next) => {
    next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
  });
  
const PORT=process.env.PORT;
app.listen(PORT,()=>
console.log(`App listening on port ${PORT} `)
);
