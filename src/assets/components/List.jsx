import "bootstrap/dist/css/bootstrap.css";
import { Fragment } from "react";
import { Badge } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

export default function List({ taskList, updatedTaskList, removeFromList }) {
    return (
        <Fragment>
            <div className="col-md-6">
                <h3 className="text-center display-6 fw-bold">Todo List</h3>
                <div className="todoList">
                    <ListGroup>
                        {taskList.length > 0 &&
                            taskList.map((task) => (
                                <ListGroup.Item key={task && task.id}>
                                    <div className="d-flex task-list">
                                        <Form.Check
                                            inline
                                            id={(task && task.id) || 0}
                                            className="pl-5"
                                        >
                                            <Form.Check.Input
                                                defaultChecked={task && task.completed}
                                                onChange={(e) =>
                                                    updatedTaskList(e, task.id)
                                                }

                                            />
                                            <Form.Check.Label>
                                                {task && task.title}
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <div className="button">
                                            <Badge
                                                className={`task-badge p-2 ${task && task.completed
                                                    ? "bg-success"
                                                    : "bg-danger"
                                                    }`}
                                                text="light"
                                            >
                                                {task && task.completed
                                                    ? "Completed"
                                                    : "Pending"}
                                            </Badge>
                                            <CloseButton onClick={() => removeFromList((task && task.id) || 0)} />

                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </div>
            </div>
        </Fragment>
    );
}
