import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email:{type: String, required: true,unique: true},
  Potato_Early_Blight: {type: Number, default:0},
  Potato_Late_Blight: {type: Number, default:0},
  Potato_Healthy: {type: Number, default:0},
  Tomato_Bacterial_spot: {type: Number, default:0},
  Tomato_Early_blight: {type: Number, default:0},
  Tomato_Late_blight:{type: Number, default:0},
  Tomato_Leaf_Mold:{type: Number, default:0},
  Tomato_Septoria_leaf_spot:{type: Number, default:0},
  Tomato_Spider_mites_Two_spotted_spider_mite:{type: Number, default:0},
  Tomato__Target_Spot:{type: Number, default:0},
  Tomato__Tomato_YellowLeaf__Curl_Virus:{type: Number, default:0},
  Tomato__Tomato_mosaic_virus: {type: Number, default:0},
  Tomato_healthy:{type: Number, default:0},
  Pepper__bell___Bacterial_spot:{type: Number, default:0}, 
  Pepper__bell___healthy:{type: Number, default:0}
});

export const User = mongoose.model('User',userSchema); //users

const solutionSchema = new mongoose.Schema({
  outcome: { type: String, required: true },
  causeause: { type: String, required: true },
  prevention: { type: String }
});

export const solution = mongoose.model('sol', solutionSchema); //sols