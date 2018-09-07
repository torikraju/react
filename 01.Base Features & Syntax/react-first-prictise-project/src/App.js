import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        Persons: [
            {name: 'Triss Merigold', age: 28},
            {name: 'Yennefer', age: 30},
            {name: 'Cirilla', age: 22}
        ],
        otherState: 'some other value',
        showPerson: false
    }

    showFullNameHandler = (name) => {
        this.setState({
            Persons: [
                {name: name, age: 28},
                {name: 'Yennefer', age: 30},
                {name: 'Cirilla', age: 22}
            ]
        })
    }

    changeNameHandler = (event) => {
        this.setState({
            Persons: [
                {name: "Triss", age: 28},
                {name: 'Yennefer', age: 30},
                {name: event.target.value, age: 22}
            ]
        })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let person = null;

        if (this.state.showPerson) {
            person = (
                <div>
                    {this.state.Persons.map(person = () => {
                        return <Person
                            name={person.name}
                            age={person.age}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hello i'm react app</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Name
                </button>
                {person}
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this works'));
    }
}

export default App;