import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

//APP COMPONENT HAS 2 STATES: 
//APP owns the state so any component that has state uses class syntax so can use constructor function to create this.state
//State is what changes in an app, is what describes the app. Virtual DOM collects the state which is used by react to render them and apss them down as props to components (which are pure functions)
class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
    }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }) //UPDATES SEARCHFIELD TO WHATEVER IS TYPED IN THE BOX
  }
  
  //MANAGE THE STATE HERE:
  //with info from search box, can now communicate with the cardList and tell it to filter the robots state to now have only what includes in the searchfield
  render () {
    const {robots, searchfield} = this.state; //this removes the need to keep writing 'this.'
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
       <h1>Loading...</h1> :
     (
        <div className="tc"> 
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            {/* if anything in cardlist fails, error boundary will catch it and display the message as per ErrorBoundary.js */}
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
          </Scroll>
      </div>
    );
  }
}

export default App;


//CONSIDER ONE WAY TOP-DOWN DATA FLOW AND THAT TO COMMUNICATE ACROSS CHILDREN RATHER THAN DOWN, NEED TO DEAL WITH 'STATE':
//STATE is the description of the app, an object that describes the application
//STATE can change dynamically, allows the communication between search bar and robots
//PROPS are things that come out of state
//parent feeds state into a child component and when received it becomes its property which can never change

//need to create a constructor to define this.state

//use event and on change to communicate between state and change in state, searchbox/robots:
//every time 'on change' is triggered, call the 'search change' funciton which communicates with the parent 