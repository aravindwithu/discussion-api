'use strict';

const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Discussion = mongoose.model('Discussion');

exports.list_comments = (req,res)=>{
    Comment.find({},(err,comment)=>{
        if(err){
            res.send(err);
        }
        res.json(comment);
    });
};

exports.create_comment = (req,res)=>{
    const new_comment = new Comment(req.body);
    new_comment.save((err, comment)=>{
        if(err){
            res.send(err);
        }
        res.json(comment._id);
    });
};

exports.read_comment = (req,res)=>{
    Comment.findById(req.params.commentId ,(err,comment)=>{
        if(err){
            res(err);
        }
        res.json(comment);
    });
};

// exports.update_comment = (req,res)=>{
//     Comment.findOneAndUpdate(
//         {_id: req.params.commentId},
//         req.body,
//         {new: true}, 
//         (err,comment)=>{
//         if(err){
//             res.send(err);
//         }
//         res.json(comment._id);
//     });
// };

exports.update_comment = (req,res)=>{
    Discussion.findOneAndUpdate(
        {_id: req.params.commentId},
        {
            "$push": {
                comments: req.body
            }
        },
        {new: true}, 
        (err,comment)=>{
        if(err){
            res.send(err);
        }
        res.json(comment._id);
    });
};

exports.delete_comment = (req, res) => {
    Comment.remove({
      _id: req.params.commentId}, (err, comment) => {
      if (err){
        res.send(err);
      }
      res.json({ message: 'Comment successfully deleted' });
    });
  };
  
