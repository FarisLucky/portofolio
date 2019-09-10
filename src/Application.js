import React,{Component} from "react";
import Name from './Score';

class Application extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       jumlah: 0,
       finish: false
    }
  }
  
  terserah = () => {
    this.setState({count: this.state.count+1})
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.count > 10  && this.state.count !== prevState.count && !this.state.finish) {
      this.setState({jumlah: this.state.jumlah +1})
      this.setState({finish: true});
    }
  }
  
  reset = (e) => {
    this.setState({
      count: 0,
      finish: false
    });
  }
  
  render(){
    let {count} = this.state;
    return (
      <div>
        <h2>Now , you clicked the button {count} many times</h2>
        <Name count={this.state.finish} reset = {(e)=>this.reset()}/>
        <span>
          <button onClick={()=>this.terserah()}>Click me</button>
        </span>
      </div>
    );
  }
}

export default Application;