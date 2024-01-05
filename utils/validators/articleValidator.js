const {check}=require('express-validator');
const validatorMW=require('../../middlewares/validatorMW');

exports.createArticleValidator=[
check('title').notEmpty().withMessage('Title required'),
check('body').notEmpty().withMessage('Body required').isLength({max:700}).withMessage('Too long article body'),
check('author').notEmpty().withMessage('Author required')
    ,validatorMW
];

exports.getArticleValidator=[
check('id').isMongoId().withMessage('Invalid id format')
    ,validatorMW
];

exports.deleteArticleValidator=[
    check('id').isMongoId().withMessage('Invalid id format')
        ,validatorMW
];

exports.updateArticleValidator=[
    check('id').isMongoId().withMessage('Invalid id format')
    ,validatorMW
];
    