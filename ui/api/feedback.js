const express = require('express');
const router = express.Router();
const FeedbackHandler = require('../../learning/feedback');
const feedback = new FeedbackHandler();

router.post('/', (req, res) => {
  const { question, positive } = req.body;
  feedback.recordFeedback(question, positive);
  res.sendStatus(204);
});

module.exports = router;