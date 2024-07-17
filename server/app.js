import express from 'express'
import connectDB from './config.js';
import { User } from './model.js';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(express.json())

connectDB();

app.use(cors({credentials: true, origin: "*"}))

//Login route
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

    console.log(email, response)
    if (!email || !response) {
      throw new Error('No email or No response');
    }
    
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      throw new Error("No user found");
    }
    console.log(foundUser[response]);
    console.log(response);
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

app.listen(port, () => {
  console.log(`/Server running at http://localhost:${port}/`);
});