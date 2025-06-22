import '../model/connection.js';
import url from 'url';
import BidSchemaModel from '../model/bid.model.js';

export var save=async (req,res)=>{
 var bidList=await BidSchemaModel.find();    
 var l=bidList.length;
 var _id=l==0?1:bidList[l-1]._id+1;

 var bidDetails={...req.body,"_id":_id,"info":Date()};
 try {
  await BidSchemaModel.create(bidDetails);
  res.status(201).json({"status":true}); 
 }
 catch(error)
 {
    res.status(500).json({"status":false});  
 }
};

export var fetch=async(req,res)=>{
  var condition_obj=url.parse(req.url,true).query;    
  var bidList=await BidSchemaModel.find(condition_obj);
  if(bidList.length!=0)
    res.status(200).json(bidList);
  else
    res.status(404).json({"status":"Resource not found"});
};


