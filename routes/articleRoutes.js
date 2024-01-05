const express=require('express');
const router=express.Router();
const {updateArticle,
    createArtice,
    getAllarticles,
    getArticle,
    deleteArticle}=require('../controllers/articleController');

const {createArticleValidator,
updateArticleValidator,
getArticleValidator,
deleteArticleValidator}=require('../utils/validators/articleValidator');   


router.route('/')
.get(getAllarticles)
.post(createArticleValidator,createArtice);


router.route('/:id')
.get(getArticleValidator,getArticle)
.put(updateArticleValidator,updateArticle)
.delete(deleteArticleValidator,deleteArticle);

module.exports=router;