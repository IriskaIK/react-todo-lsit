import "./inputs.css"
import React, {useEffect, useState} from "react";
import Creatable from 'react-select/creatable';
import {SingleValue} from "react-select";
import useModalStore from "../../../store/modalStore";
import { v4 as uuidv4 } from 'uuid';
import useTaskStore from "../../../store/taskStore";
interface Option {
    readonly label: string;
    readonly value: string;
    // readonly id? : string;
}

//
function createOption(label: string): Option {
    const listId : string = uuidv4()
    return {
        label: label,
        value: listId,
    }
}

const defaultOptions: Option[] = [
];

function ListSelectionInput() {


    const {newTask, setTaskListName, setTaskListId} = useModalStore()
    const {lists} = useTaskStore()

    const [options, setOptions] = useState(defaultOptions);
    const [currentList, setCurrentList] = useState<Option | null>();

    useEffect(() => {
        if (currentList) {
            setTaskListName(currentList.label)
        } else {
            setTaskListName(null)
        }
    }, [currentList]);


    const handleCreate = (inputValue: string) => {
        const newOption = createOption(inputValue);
        setCurrentList({label: inputValue, value: newOption.value})
        setOptions((prev) => [...prev, newOption]);
        setTaskListName(newOption.label)
        setTaskListId(newOption.value)

    };

    const handleChange = (newValue: SingleValue<Option>) => {
        setCurrentList(newValue)
        if (newValue) {
            setTaskListName(newValue.label)
            setTaskListId(newValue.value)
        } else {
            setTaskListName(null)
            setTaskListId(null)
        }

    }
    return (
        <div className="list-selection-container">
            <Creatable
                onChange={handleChange}
                onCreateOption={handleCreate}
                options={options}
                value={
                    currentList
                }
                isClearable
            />
        </div>
    );
}

export default ListSelectionInput;