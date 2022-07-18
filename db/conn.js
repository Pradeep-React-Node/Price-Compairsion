//mongodb+srv://venkteshsia:Sia12345@cluster0.kq559.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongodb+srv://venkteshsia:Sia12345@cluster0.kq559.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



const mongoose= require('mongoose');

const connectDB =async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser:true,
          useUnifiedTopology:true,
          //useFindAndModify:false,
          //useCreateIndex:true  
        })
console.log(`MongoDB connnected : ${con.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports=connectDB