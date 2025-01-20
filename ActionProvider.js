class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage, ...rest) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  
  // Action methods
  Sendgreetings() {
    const greetingMessage = this.createChatBotMessage("Hello! How can I assist you?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, greetingMessage],
    }));
  }

  sayGoodbye() {
    const goodbyeMessage = this.createChatBotMessage("Goodbye! Have a great day!");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, goodbyeMessage],
    }));
  }

  handleThanks() {
    const thanksMessage = this.createChatBotMessage("You're welcome! If you have any other questions, feel free to ask.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, thanksMessage],
    }));
  }

  handleUnknown() {
    const unknownMessage = this.createChatBotMessage("I'm not sure how to respond to that. Can you please rephrase?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, unknownMessage],
    }));
  }
}

export default ActionProvider;