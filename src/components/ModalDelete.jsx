import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({id}) {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .delete("https://gofiber-production.up.railway.app/api/v1/month/delete/"+id)
          .then(() => {
            alert("berhasil")
            handleClose()
            window.location.reload();
          })
          .catch((error) => console.log(error));
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