import "./inputs.css"
import React, {useEffect, useState} from "react";
import Creatable from 'react-select/creatable';
import { v4 as uuidv4 } from 'uuid';
import useModalStore from "../../../store/modalStore";
import useListStore from "../../../store/listsStore";
import {SingleValue} from "react-select";
import {List} from "../../../types/listType";


interface Option {
    readonly label: string;
    readonly value: string;
    // readonly id? : string;
}

function createOption(label: string): Option {
    const listId : string = uuidv4()
    return {
        label: label,
        value: listId,
    }
}

function transformListToOptions(listArray: List[]): Option[] {
    return listArray.map(item => ({
        label: item.name,
        value: item.id
    }));
}

const defaultOptions: Option[] = [
];

function ListSelectionInput() {


    const {setTaskListName, setTaskListId, newTask} = useModalStore()
    const {lists} = useListStore()

    const [options, setOptions] = useState(defaultOptions);
    const [currentList, setCurrentList] = useState<Option | null>();

    useEffect(() => {
        if (currentList) {
            setTaskListName(currentList.label)
        } else {
            setTaskListName(null)
        }
    }, [currentList, setTaskListName]);


    useEffect(() => {
        if(newTask.listId && newTask.listName){
            setCurrentList({value:newTask.listId, label:newTask.listName})
        }
    }, );


    useEffect(() => {
        setOptions(transformListToOptions(lists))
    }, [lists]);


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