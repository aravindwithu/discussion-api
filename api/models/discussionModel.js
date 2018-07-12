'use strict';
const mongoose = require('mongoose'),
schema = mongoose.Schema,
Comment = require('./commentModel.js'),
CommentSchema = mongoose.model('Comment').schema;

const discussionSchema = new schema({
    author: {
        type: String,
        required: 'Kindly enter the author of the discussion'
    },
    title: {
        type: String,
        required: 'Kindly enter the title of the discussion'
    },
    subject: {
        type: String,
        required: 'Kindly enter the subject of the discussion'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: [CommentSchema],
        default: []
    },
    status: {
        type: [{
        type: String,
        enum: ['new', 'ongoing', 'completed']
        }],
        default: ['new']
    }    
});

module.exports = mongoose.model('Discussion', discussionSchema);