import "bootstrap/dist/css/bootstrap.css";
import React, { Fragment } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List() {
    return (
        <Fragment>
            <div className="col-md-6">
                <h3 className="text-center display-6 fw-bold">Task List</h3>
                <div className="todoList">
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </Fragment>
    )
}
