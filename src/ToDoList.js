import { Component } from "react";
import done from './assets/done.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        todoList: []

    }
    onChangeEvent (e) { 
        this.setState({userInput:e})    
    }

    addToDo (input) {
        if (input === '') {
            alert ("Please enter an item")
        }
        let listNew = this.state.todoList;
        listNew.push(input);
        this.setState({todoList: listNew, userInput: ""})
    }
    deleteItem() {
        let listNew = this.state.todoList;
        listNew = [];
        this.setState({todoList: listNew})
    }

    crossedWord (event) {
        const li = event.target;
        li.classList.toggle('crossed');
        }

        onFormSubmit(e){
            e.preventDefault()
        }
        
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}> 
            <div className="lane">
                <input type="text"
                placeholder="What do you want to do?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="lane">
                <button className="add" onClick={() => this.addToDo(this.state.userInput)}>ADD</button>
            </div>
            <div className="lane"> 
                <ul>
                    {this.state.todoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={done} alt="icon" width="40px"/>
                        {item}</li>
        ))}
                </ul>
                </div>
                <div className="lane">
                <button className="delete" onClick={() => this.deleteItem()}>DELETE</button>
                </div>
                </form>
            </div>
        
        )
        }
    }
