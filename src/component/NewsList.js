import React,{Component} from 'react';
import './Header.css'

class NewsList extends Component {
    constructor(props){
        super(props)
        this.state={
            taskList:[]
        }
        
    }
    componentWillReceiveProps(props){
        let list = [
            {'checked':false,
            'task':props.newTaskToAdd
            }
        ]
       
        this.setState({taskList:this.state.taskList.concat(list)})
    }
    handleChange(index,event){
       const list = this.state.taskList;
       list[index].checked = event.target.checked;
       this.setState({'taskList':list});
    }
    render(){   
    return(
        <div >
        <div class="newsComponent">
        <ul key={Date.now()}>
            {this.state.taskList.map((data,index) => <li><span className={data.checked?'green':''}>{data.task}</span><input type="checkbox"  value="Bike"  checked={ data.checked } onChange={(e) => this.handleChange(index, e)}></input> <span className={data.checked?'':'hidden'}>&#10003;</span></li> )}
         </ul>
         </div>
         <div class="newsComponent">
             <br/>
    Total tasks:<span>{this.state.taskList.length}</span>
             </div>
         </div>
    )
    }
}

export default NewsList;