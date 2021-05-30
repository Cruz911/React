import React, { Component } from 'react';

class Bot extends Component {
    state = { 
        question: '',
        answer: ''
     }

     onChange = (event)=>{
        this.setState({question: event.target.value});
     }

     onClick = (event)=>{
        event.preventDefault()
     }
    render() { 
        return ( 
            <div className='content mt-4'>
                <h1>Tanaka Chatbot</h1>
                <div id="chatbox">
                    <p className="botText"><span>Hie. I'm Tanaka</span></p>
                </div>
                <div id="userInput">
                <p class="botText"><span>Lorem ipsum</span></p>
                    <input id="textInput" onChange={this.onChange} type="text" name="msg" value={this.state.question} placeholder="Message"/>
                    <button id="buttonInput" onClick={this.onClick}>Ask</button>
                </div>

            </div>
         );
    }
}
 
export default Bot;