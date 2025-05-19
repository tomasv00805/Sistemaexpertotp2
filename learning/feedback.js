class FeedbackHandler {
    constructor() {
      this.feedbackHistory = [];
    }
  
    recordFeedback(question, positive) {
      this.feedbackHistory.push({ question, positive });
    }
  }
  
  module.exports = FeedbackHandler;