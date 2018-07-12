'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentSchema = new schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the comment'
    },
    comment: {
        type: String,
        required: 'Kindly enter the comment of the comment'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);
