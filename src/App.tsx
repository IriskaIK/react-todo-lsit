import React from 'react';
import './App.css';
import Menu from "./components/NavigationMenu/Menu";
import ListMainContainer from "./components/ListComponent/ListMainContainer";
import CreateTaskModal from "./components/CreateTaskComponent/CreateTaskModal";


import useModalStore from "./store/modalStore";

function App() {

    const {isModalOpen} = useModalStore()


    return (
    <div className="App">
        <Menu></Menu>
        <ListMainContainer></ListMainContainer>
        {isModalOpen && <CreateTaskModal></CreateTaskModal>}
    </div>
  );
}

export default App;
