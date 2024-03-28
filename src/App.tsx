import React from 'react';
import './App.css';
import Menu from "./components/NavigationMenu/Menu";
import ListMainContainer from "./components/ListComponent/ListMainContainer";
import TaskEditorContainer from "./components/TaskEditor/TaskEditorContainer";

function App() {
  return (
    <div className="App">
        <Menu></Menu>
        <TaskEditorContainer></TaskEditorContainer>
        {/*<ListMainContainer></ListMainContainer>*/}
    </div>
  );
}

export default App;
