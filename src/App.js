import React, {Component} from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      heroes:[],
      searchField: ""
    }
  }
  componentDidMount(){
    fetch(" https://api.opendota.com/api/heroStats ")
    .then(response => response.json())
    .then(hero => this.setState({heroes:hero}));
  }

  handleChange = e => {
     this.setState({searchField: e.target.value})
  }

  render(){
    const {heroes, searchField} = this.state;
    const filteredHeroes = heroes.filter(hero => hero.localized_name.toLowerCase().includes(searchField.toLocaleLowerCase()) || hero.roles[0].toLowerCase().includes(searchField.toLocaleLowerCase()));
    return(
      
    <div className="App">
      <h1 className = "heading">Dota 2 Hero Roster</h1>
      <SearchBox
      placeholder = "Search Heroes" handleChange = {this.handleChange}
      />
      <CardList heroes = {filteredHeroes}></CardList>
    </div>
    )
  }
}

export default App;
