import "bootstrap/dist/css/bootstrap.css";
import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Input() {
    const [message, setMessage] = useState("");

    const handelChange = (event) => {
        setMessage(event.target.value);
    };

    const handelSubmit = () => {
        console.log(message);
    };

    return (
        <Fragment>
            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <Form className=" ">
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>
                                        <h5>Insert a Task</h5>
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        onChange={(event) => {
                                            handelChange(event);
                                        }}
                                        rows={3}
                                    />
                                </Form.Group>
                                <Button
                                    variant="success"
                                    onClick={() => handelSubmit()}
                                    className="btn-lg "
                                >
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
