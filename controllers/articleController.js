const asyncHandler=require('express-async-handler');
const Article=require('../models/articles');
const ApiError=require('../utils/apiError');

exports.createArtice=asyncHandler(async(req,res)=>{
    const article=await Article.create(req.body);
    res.status(200).json({data:article});
});

exports.getArticle=asyncHandler(async(req,res,next)=>{
    const article=await Article.findById(req.params.id);
    if(!article)
    return next(new ApiError(`No article found with this id ${req.params.id}`));

    res.status(200).json({data:article});
});

exports.getAllarticles=asyncHandler(async(req,res)=>{
    const articles=await Article.find();
    res.status(200).json({articles});
});

exports.updateArticle=asyncHandler(async(req,res,next)=>{
    const article=await Article.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!article)
    return next(new ApiError(`No article found with this id ${req.params.id}`));

    res.status(200).json({data:article});
});

exports.deleteArticle=asyncHandler(async(req,res,next)=>{
    const article=await Article.findByIdAndDelete(req.params.id);
    if(!article)
    return next(new ApiError(`No article found with this id ${req.params.id}`));

    res.status(200).json({message:"One article deleted"});
});