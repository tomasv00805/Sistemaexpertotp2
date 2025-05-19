class WorkingMemory {
    constructor() {
      this.history = [];
    }
  
    record(question, ruleName) {
      this.history.push({ question, ruleName });
    }
  }
  
  module.exports = WorkingMemory;