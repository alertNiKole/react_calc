// Methods`
/*

class Application extends Component {
    constructor(props){
        super(props);
    }

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

  */
//States


class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            count:0
        } 
    }

    handleClick = () => {
        console.log("Clicked this");
        this.setState({count: this.state.count + 1});
    }

    render () { //this passes/returns something to the page
        let name = 'George';
        let {count} = this.state;
        return (
            <div>
               <h1>Hi der, {name}</h1>
               <h2>You clicked the button {count} times</h2>
                 <span>words go here</span>  
                 <span>
                     <button onClick={(e => this.handleClick)}>Click Here</button>
                </span>
             </div>
             
        )
    }
}