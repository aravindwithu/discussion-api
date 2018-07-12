'use strict';

const mongoose = require('mongoose');
const Discussion = mongoose.model('Discussion');

exports.list_discussions = (req,res)=>{
    Discussion.find({},(err,discussion)=>{
        if(err){
            res.send(err);
        }
        res.json(discussion);
    });
};

exports.create_discussion = (req,res)=>{
    const new_discussion = new Discussion(req.body);
    new_discussion.save((err, discussion)=>{
        if(err){
            res.send(err);
        }
        res.json(discussion._id);
    });
};

exports.read_discussion = (req,res)=>{
    Discussion.findById(req.params.discussionId ,(err,discussion)=>{
        if(err){
            res(err);
        }
        res.json(discussion);
    });
};

exports.update_discussion = (req,res)=>{
    Discussion.findOneAndUpdate(
        {_id: req.params.discussionId},
        req.body,
        {new: true}, 
        (err,discussion)=>{
        if(err){
            res.send(err);
        }
        res.json(discussion._id);
    });
};

exports.delete_discussion = (req, res) => {
    Discussion.remove({
      _id: req.params.discussionId}, (err, discussion) => {
      if (err){
        res.send(err);
      }
      res.json({ message: 'Discussion successfully deleted' });
    });
  };
  
