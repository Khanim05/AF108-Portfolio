
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'

function Example  ({
    show,
    handleClose
})  {
    return (
    <>

      <Modal show={show} 
             onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-submit">
                <form action="submit">
                <label htmlFor="image">Image</label>
                <input type="url"  name='image' id='image'/>

                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />

                <label htmlFor="category">Category</label>
                 <input type="text" name="category" id="category" />

                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" />

                </form>
            </div>
           

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 


export default Example;