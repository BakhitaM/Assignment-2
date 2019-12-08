import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'CREATE TASK',
            task:''
        }
    }

    inputChange(event){
        this.setState({task:event.target.value})
    }
    addTask(){
        this.props.newTask(this.state.task);
    }
    render(){
        return (
            <header>
                <div className="logo">
                    {this.state.title}
                </div>
                <center>
                  <input type="text"
                  onChange={this.inputChange.bind(this)}/> 
                  
                    <button onClick={this.addTask.bind(this)}>ADD</button>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;