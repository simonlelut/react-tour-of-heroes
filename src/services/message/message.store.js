class MessageStore {
    constructor (initialState) {
      this.state = initialState;
    }
  
    setState (state) {
      this.state = state;
    }
  
    getState () {
      return this.state;
    }
  }
  
  const messageStore = new MessageStore([]);
  export default messageStore;