const mongoose=require('mongoose');

const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title required']
    },
    body:{
        type:String,
        required:[true,'Body required'],
        maxlength:[700,'Too long article body']
    },
    author:{
        type:String,
        required:[true,'Author required']
    }
},{timestamps:true});

module.exports=mongoose.model('Article',articleSchema);