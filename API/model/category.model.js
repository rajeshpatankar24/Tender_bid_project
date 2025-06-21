import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const categorySchema = mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required:[true,"category name is required"],
        lowercase:true,
        trim:true,
        unique:true
    },
    caticonnm:{
        type:String,
        required:[true,"Category icon name is required"],
        trim:true
    }
});
categorySchema.plugin(uniqueValidator);// for apply validation on categorySchema 

 const categorySchemaModel = mongoose.model("category-collection",categorySchema);
 export default categorySchemaModel;