import mongoose from 'mongoose';
import app from './app.js'
import dotenv from 'dotenv'
//Create A Server
dotenv.config({ path: './config.env' })//write the path of env file. It is call only once then it will be accessible for everywhere in project


// console.log(app.get('env'));//env is variable name
// console.log(process.env);//process is core module, as process is available everywhere. It returns all the variables. 


mongoose.connect(process.env.CONN_STR, {
    // useNewUrlParser: true
}).then((conn) => {
    // console.log(conn);
    console.log("DB Connection Successful");
}).catch(() => {
    console.log("DB is not Connected");
})


/*
connectDB = async (req, res)=>{
	try{connect("URL")
	log("DB Is Connected")
	}
	catch
	{
	log("error")
	}
}

*/

// set NODE_ENV = development

//nodejs have to know the env
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`Server has Started...${PORT}`)
})


