// import { Component } from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render");
  const [searchFiled, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFiledString = event.target.value.toLowerCase();
    setSearchField(searchFiledString);
  };

  useEffect(() => {
    console.log("effect firing!!!");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((repsonse) => repsonse.json())
      .then((users) => setMonsters(users))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFiled);
    });
    setFilterMonsters(newMonsters);
  }, [monsters, searchFiled]);

  return (
    <div className="App">
      <h1 className="app-title">Rolodex Roloing</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFiled: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((repsonse) => repsonse.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchFiled: searchString };
//     });
//   };

//   render() {
//     const { monsters, searchFiled } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchFiled);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Rolodex Roloing</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
