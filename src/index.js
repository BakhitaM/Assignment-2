import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import NewsList from './component/NewsList';

class App extends Component {
    constructor(){
        super()
        this.state={
            task:''
        }
    }

    filterNews(data){
        this.setState({'task':data})
    }
    render(){
        return(
            <React.Fragment>
                <Header newTask={(data) => {this.filterNews(data)}}/>
                <NewsList newTaskToAdd={this.state.task}></NewsList>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))

/*
Form parent to child we have to pass as props
From child to parent we have to pass thorugh function(callback function)*/