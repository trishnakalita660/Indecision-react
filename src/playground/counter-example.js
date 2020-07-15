class Counter extends React.Component{
  
    constructor(props){
        super(props);
        this.handleAddOne= this.handleAddOne.bind(this);
        this.handleMinusOne= this.handleMinusOne.bind(this);
        this.handlereset= this.handlereset.bind(this);

        this.state = {
            count: 0
        };
    }
    
 handleAddOne(){
   this.setState((initialCount)=>{
       return {
           count : initialCount.count+1
       };
   });
 }
 handleMinusOne(){
    this.setState((initialCount)=>{
        return{
            count: initialCount.count-1
        };
    })
 }
 handlereset(){
     this.setState(()=>{
         return {count:0};
     })
 }
    render(){
    
    return(
        <div>
        <h1> Count :{this.state.count} </h1>
        <button onClick= {this.handleAddOne}>+1</button>
        <button onClick= {this.handleMinusOne}>-1</button>
        <button onClick={this.handlereset}>reset</button>
        </div>
    );
}
}
ReactDOM.render(<Counter/>, document.getElementById('app'));



