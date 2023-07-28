const mongoose=require('mongoose');
mongoose.connect(process.env.uri)
.then(()=>{
    console.log('Connected to MongoDB Atlas');
})
.catch((e)=>{
    console.log('Error!! Unable to connect to MongoDB Atlas')
})