import React, { Component } from 'react';

class Bot extends Component {
    state = { 
        question: ''
     }

     onChange = (e)=>{
        
     }

     onClick = (e)=>{

     }
    render() { 
        return ( 
            <div className='content mt-4'>
                <h1>Tanaka Chatbot</h1>
                <div id="chatbox">
                    <p class="botText"><span>Hie. I'm Tanaka</span></p>
                </div>
                <div id="userInput">
                    <input id="textInput" onChange={this.onChange} type="text" name="msg" placeholder="Message"/>
                    <button id="buttonInput" onClick={this.onClick}>Ask</button>
                </div>

            </div>
         );
    }
}
 
export default Bot;