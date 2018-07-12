'use strict';
module.exports = (app) => {
    const commentData = require('../controllers/commentController');

    app.route('/comments')
        .get(commentData.list_comments)
        .post(commentData.create_comment);

    app.route('/comments/:commentId')
        .get(commentData.read_comment)
        .put(commentData.update_comment)
        .delete(commentData.delete_comment);
};