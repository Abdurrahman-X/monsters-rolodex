import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    return (
      <div className="App">
        <input type="search" placeholder="Search Monsters" />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

// setState is an asynchronous function. If you want to do something only after setState has rendered, make a callback that will get called right after setState.

// You cannot run setState in render()

export default App;
