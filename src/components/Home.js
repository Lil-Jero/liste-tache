import { useState } from "react";
import { Data } from "../data/Data";
import ListForm from "./ListForm";
import List from "./List";

const Home = () => {

    const [list, setList] = useState(Data);
    // console.log(list);

    const deleteBook = (id) => {
        setList(
            list.filter(list => list.id !== id)
        )
    }

    const toggleEditTask = (task) => {
        setList(
            list.map(t => t.id === task.id
                ? { ...t, editable: !t.editable }
                : t
            ))
    }

    const editTask = (id, updates) => {
        setList(
            list.map(t => t.id === id
                ? { ...t, ...updates }
                : t
            )
        );
    }

    const addTask = (newTask) => {
        setList([newTask, ...list])
    }

    return (
        <>
            <ListForm addTask={addTask} />
            <table className="table  table-hover container">
                <thead>
                    <tr className="table-info">
                        <th>Tâche</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(list => (
                        <List
                            key={list.id}
                            task={list}
                            deleteBook={() => deleteBook(list.id)}
                            toggleEditTask={() => toggleEditTask(list)}
                            editTask={editTask}
                        />
                    ))}
                </tbody>
            </table>
        </>

    );
};

export default Home;