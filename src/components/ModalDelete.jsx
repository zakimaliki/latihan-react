import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import deleteMonth from '../config/redux/action/deleteMonthAction';

function ModalDelete({ id }) {


    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteMonth(id, setShow))
    };

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete Month
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Apakah anda yakin ingin mengapus data</p>
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

export default ModalDelete;