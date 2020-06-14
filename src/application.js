import React, {Component} from 'react';
import HighScore from './highScore'

class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            overTen: false
        }
    }
/*
    componentWillMount(props,state){

    }

    componentDidMount(props,state) {
        console.log("mounted with", props, state)
    }

    componentWillReceivePropos(props){

    }
    componentWillUpdate(props,state){
        if(this.props.name !== props.name){

        }
            //do something
    }
    componentDidUpdate(props,state){
        
    }
   */
   
    handleClick = () => {
        console.log("Clicked this");
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate (props, state) {
        if (this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {
           console.log("You pressed it at least 10 times...seriously?")
            this.setState({overTen:true});
        }
            
            console.log("Updated from", state, "To ",this.state);
    }

    resetCount = (e) => {
        this.setState ({
            count: 0,
            overTen: false
        });
    }

    render () { //this passes/returns something to the page
        let name = 'George';
        let {count} = this.state;
        return (
            <div>
               <h1>Hi der, {name}</h1>
               <h2>Click the button. You clicked the button {count} times</h2>
               {(this.state.overTen) ?
              
                 
              
              <HighScore
            //   this identifies the clickcount, if over 10 then do x
            // question - how are we defining that its This Value instead of this element like in DOM navigation?
                overTen={this.state.overTen}  //Create your own element and element properties (like id and class)
                 // This resets the count of the clicks.  resetCount, its been added to a button
                onReset = {(e) => this.resetCount(e)} 
                />

                    : null
                }
                     <div>
                     <button onClick={() => this.handleClick()}>Click Here</button>
                     </div>
             </div>
             
        )
    }
}



export default Application //this is how  you export a class vs a module or function