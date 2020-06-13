import React, {Component} from 'react';

class Application extends Component {
    render () { //this passes/returns something to the page
        let name = 'George';
        return (
            <div>
               <h1>Hi der, {name}</h1>
                 <span>words go here</span>  
             </div>
        );
    }
}

export default Application //this is how  you export a class vs a module or function