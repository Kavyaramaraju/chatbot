class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.Sendgreetings();
    } else if (lowerCaseMessage.includes("bye")) {
      this.actionProvider.sayGoodbye();
    } else if (lowerCaseMessage.includes("thanks") || lowerCaseMessage.includes("thank you")) {
      this.actionProvider.handleThanks();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;