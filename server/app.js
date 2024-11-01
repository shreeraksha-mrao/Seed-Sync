import express from 'express'
import connectDB from './config.js';
import { solution, User } from './model.js';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(express.json())

connectDB();

app.use(cors({credentials: true, origin: "https://seedsyncai.vercel.app/"}))

app.get('/ping',async (req,res)=>{ //health check route 
  res.send("App is working properly")
});

app.post('/login', async (req,res)=>{
  try{

    const { name , email} = req.body;
    if(!name || !email){
      return res.json({message:"User not logged in",data: ''});
    }
    
    const user = await User.find({email});
    if(user.length == 0 || !user){
      const newUser = await User.create({name,email});
      return res.status(200).json({message:"New User created successfullly",data: newUser});
    }
    return res.status(200).json({message:"User already exists",data:user})
  }catch(err){
    console.log(err);
  }
  })

app.post('/incrementPotato', async (req, res) => {
  console.log("This is where I have dont to go !!!")
  try {
    const { email, response } = req.body;

    if (!email || !response) {
      throw new Error('No email or No response');
    }
    
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      throw new Error("No user found");
    }
    foundUser[response] = foundUser[response] + 1;
    const updatedUser = await foundUser.save();
    return res.status(200).json({ message: 'Column incremented successfully', user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error incrementing column', error: error.message });
  }
});

app.post('/incrementGeneral', async (req, res) => {  
  console.log("This is where I have to go !!!")
  try {
    const { email, response } = req.body;
    console.log(email, response)
    if (!email || !response) {
      throw new Error('No email or No response');
    }
    
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      throw new Error("No user found");
    }
    foundUser[response] = foundUser[response] + 1;
    const updatedUser = await foundUser.save();
    return res.status(200).json({ message: 'Column incremented successfully', user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error incrementing column', error: error.message });
  }
});

app.post('/getData',async (req,res)=>{ 
  try{
    const {email} = req.body;
    const userInformation = await User.findOne({email:email});
    if(!userInformation){
      throw new Error("No user found");
    }
    return res.status(200).json({message:"User information fetched successfully",data:userInformation});
  }catch(err){
    console.log(err);
    return res.status(400).json({message: "Failed to fetch data:" + err.message,data:''});
  }
})

app.post('/puttodb', async(req,res) =>{
  console.log("Aayo");
  try{
    const{outcome,causeause,prevention} = req.body;
    if(!outcome || !causeause || !prevention){
      throw new Error("Not sent the data. Remember !!!")
    }

    const responseSol = await solution.create({
      outcome,causeause,prevention
    })

    return res.status(200).json({message:"Successfully posted the data into solution database",data:responseSol});

  }catch(err){
    console.log(err)
    return res.status(400).json({message: "Failed to post data:" + err.message,data:''});
  }
})

app.post('/getFromDB',async (req,res)=>{
  try{
    const {response} = req.body;
    const solRes = await solution.findOne({outcome:response});

    if(!solRes){
      throw new Error("No solution found");
    }
    return res.status(200).json({message:"Successfully fetched the data",data:solRes });
  }catch(err){
      console.error(err);
      return res.status(400).json({message:"unsuccessful", data:""})
  }
})

app.listen(port, () => {
  console.log(`/Server running at http://localhost:${port}/`);
});