import React, { Component } from 'react';
import messageStore from '../../services/message/message.store'

class Messages extends Component {

    state: {
        messages: []
    }

    constructor(){
        super()
        this.setState({messages:messageStore.getState()})
        console.log(this.state.messages);
    }

    clear(){
        messageStore.setState([]);
        this.setState({messages: []})
        console.log(messageStore.getState());
    }

  render() {
    
    return (
        
        <div>
            <h2>Messages</h2>

            <button className="clear" onClick={this.clear}>clear</button>

            { this.state.messages.map((message, index) => 
                <div key={index}> 
                    {message}
                </div>
            )}
        </div>

     )}
}

export default Messages;
