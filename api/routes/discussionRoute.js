'use strict';
module.exports = (app) => {
    const discussionData = require('../controllers/discussionController');

    app.route('/discussions')
        .get(discussionData.list_discussions)
        .post(discussionData.create_discussion);

    app.route('/discussions/:discussionId')
        .get(discussionData.read_discussion)
        .put(discussionData.update_discussion)
        .delete(discussionData.delete_discussion);
};