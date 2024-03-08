import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import createMonth from '../config/redux/action/createMonthAction';

function ModalCreate() {
    const [data, setData] = useState({
        Name: "",
        Day: 0
    });

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === "Day" ? parseInt(value, 10) : value //convert the int
        setData((prevState) => ({
            ...prevState,
            [name]: parsedValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMonth(data, setShow))
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create Month
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Name :</p>
                        <input type="text" name="Name" onChange={handleChange} />
                        <p>Day :</p>
                        <input type="number" name="Day" onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="submit">Submit</button>

                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalCreate;