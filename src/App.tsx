import "./App.css";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";
import { Greet } from "./components/Greet";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Waynce",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];
  return (
    <div className="App">
      {/* 
      <Person name={personName} />
    <PersonList lists={nameList} /> */}
      <Greet name="Aswin" isLoggedIn={false} />
      <Status status="Success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
