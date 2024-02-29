import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreate() {
    const [data, setData] = useState({
        Name: "",
        Day: 0
    });


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        e.preventDefault()
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("https://gofiber-production.up.railway.app/api/v1/month/create", {
            "Name": "test",
            "Day": 30
        })
          .then(() => {
            alert("berhasil")
            handleClose()
            window.location.reload();
          })
          .catch((error) => console.log(error));
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