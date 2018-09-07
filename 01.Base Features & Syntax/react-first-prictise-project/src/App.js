import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';


class App extends Component {

    state = {
        Persons: [
            {id: "1", name: 'Triss Merigold', age: 28},
            {id: "2", name: 'Yennefer', age: 30},
            {id: "3", name: 'Cirilla', age: 22}
        ],
        otherState: 'some other value',
        showPerson: false
    }

    deletePersonHandler = () => {
        //const person = this.state.Persons;
        const person = [...this.state.Persons];
        person.splice(person, 1);
        this.setState({Persons: person});
    }

    changeNameHandler = (event, id) => {
        const personIndex = this.state.Persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.Persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.Persons];
        persons[personIndex] = person;

        this.setState({Persons: persons})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    }


    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let person = null;

        if (this.state.showPerson) {
            person = (
                <div>
                    {this.state.Persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.changeNameHandler(event, person.id)}/>
                    })}
                </div>
            );
            //adding css dynamically
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };
        }

        //adding class dynamically
        let classes = [];
        if (this.state.Persons.length <= 2) classes.push('red');
        if (this.state.Persons.length <= 1) classes.push('bold');


        return (
            <div className="App">
                <h1>Hello i'm react app</h1>
                <p className={classes.join(' ')}>This is really working</p>
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

export default Radium(App);