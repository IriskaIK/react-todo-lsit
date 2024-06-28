import "./inputs.css"
import React, {useState} from "react";
import Creatable from 'react-select/creatable';
import {SingleValue} from "react-select";
import useModalStore from "../../../store/modalStore";

interface Option {
    readonly label: string;
    readonly value: string;
}

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
    createOption('One'),
    createOption('Two'),
    createOption('Three'),
];

function ListSelectionInput() {
    const [options, setOptions] = useState(defaultOptions);

    const {newTask, setTaskListName} = useModalStore()
    const handleCreate = (inputValue: string) => {
        const newOption = createOption(inputValue);
        setOptions((prev) => [...prev, newOption]);
        setTaskListName(newOption)

    };

    const handleChange = (newValue : SingleValue<Option>) => {
        setTaskListName(newValue)
    }


    return (
        <div className="list-selection-container">
            <Creatable
                onChange={handleChange}
                onCreateOption={handleCreate}
                options={options}
                value={newTask.listName}
                isClearable
            />
        </div>
    );
}

export default ListSelectionInput;