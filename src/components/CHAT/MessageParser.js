class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("خطط") || lowerCaseMessage.includes("تمارين")) {
        this.actionProvider.handleWorkoutPlans();
      } else if (lowerCaseMessage.includes("بروتين")) {
        this.actionProvider.handleProteinBenefits();
      } else if (lowerCaseMessage.includes("نصائح")) {
        this.actionProvider.handleHealthTips();
      } else if (lowerCaseMessage.includes("غذاء")) {
        this.actionProvider.handleDietTips();
      } else if (lowerCaseMessage.includes("الجسم المثالي")) {
        this.actionProvider.handleIdealBody();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;