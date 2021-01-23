import React, { Component } from 'react';
import Navbar from './components/navbar'
import './App.css';
import Counters from './components/counters'

class App extends Component {
    state = { 
      counters: [
          {id: 1,value: 0},
          {id: 2,value: 0},
          {id: 3,value: 0},
          {id: 4,value: 4},
      ]
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId)
      this.setState({ counters })
      console.log("Event handler called",counterId)
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      })
      this.setState({ counters })
  }

  handleIncrement = counter => {
      // cloning the entire counters array
      const counters = [...this.state.counters]
      const index = counters.indexOf(counter)
      counters[index].value++
      this.setState({counters})
  }

  render() { 
    return (  
      <React.Fragment >
        <Navbar 
          totalCounters = {this.state.counters.filter(c => c.value >0 ).length}
        />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;

