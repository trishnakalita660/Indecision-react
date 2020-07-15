
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption= this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
   
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
             if(options){
            this.setState(()=>({options}));
             }
             console.log('data fetching');
        } catch (error) {
            console.log("Error");
            
        }
       
        
    }
    componentDidUpdate(prevState, prevProps){

        if(prevState.options.length!== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }        
    }

    componentWillUnmount(){
        console.log("bla bla");
        
    }
    handleDeleteOptions() {
        console.log("Clicked");
        
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
      this.setState((prevState)=>({
          options: prevState.options.filter((option)=>{
              return optionToRemove!==option;
          })

      }))

    }

    handleAddOptions(option) {
        if (!option) {
            return "Enter Valid value";
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        } 
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const picker = this.state.options[randomNum];
        alert(picker);
    }


    render() {

        const appDetails = {

            subTitle: "Put your life in the hands of a computer",

        };
        return (

            <div>
                <Header subTitle={appDetails.subTitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOptions} />
            </div>
        );
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h3>{props.subTitle}</h3>}
        </div>);
}

Header.defaultProps = {
    title: 'Indecision'
}
IndecisionApp.defaultProps = {
    options: []
  };
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?</button>

        </div>
    );
}

const Option = (props) => {

    return (
        <div>
            {props.optionText}
            <button
             onClick= {(e)=>props.handleDeleteOption(props.optionText)}>Remove</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            
        {props.options.length===0 && <p>Enter options to get started</p>}
            {props.options.map((option) => (
                <Option key={option} optionText={option}
                handleDeleteOption={props.handleDeleteOption} />
                ))}

        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button >Add Task</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));