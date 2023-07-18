import { Fragment, useEffect, useState } from "react";
import Input from "./Input";
import List from "./List";

export default function Todo() {
    const [message, setMessage] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const handelChange = (event) => {
        setMessage(event.target.value);
    };

    const handelSubmit = () => {
        const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

        if (message) {
            const newTask = {
                id: newTaskId,
                title: message,
                completed: false,
            };

            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            setMessage("");
        }
    };

    const updatedTaskList = (e, id) => {
        const tasksList = tasks;
        const updatedList = tasksList.map((item) => {
            item.completed = item.id === id ? e.target.checked : item.completed;
            return item;
        })
        setTasks(updatedList)
        localStorage.setItem("tasks", JSON.stringify(updatedList));
    };

    const removeFromList = (id) => {
        const tasksList = tasks;
        const updatedList = tasksList.filter((item) => item.id != id)
        setTasks(updatedList)
        localStorage.setItem("tasks", JSON.stringify(updatedList));
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row gap-4">
                    <Input
                        handelChange={handelChange}
                        handelSubmit={handelSubmit}
                        message={message ?? ''}
                    ></Input>
                    <List
                        taskList={tasks}
                        updatedTaskList={updatedTaskList}
                        removeFromList={removeFromList}
                    ></List>
                </div>
            </div>
        </Fragment>
    );
}
