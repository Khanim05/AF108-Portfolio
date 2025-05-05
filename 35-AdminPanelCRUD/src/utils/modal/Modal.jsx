
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'

function Example  ({
    show,
    handleClose,
    handleChange,
    formdata,
    handleSubmit,
})  {
    return (
    <>

      <Modal show={show} 
             onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formdata.id ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-submit">

                <form action="submit" onSubmit={handleSubmit}>

                <label htmlFor="image">Image</label>
                <input type="url"  
                onChange={handleChange}
                value={formdata.image}
                placeholder='Image'
                name='image' 
                id='image'/>

                <label htmlFor="title">Title</label>
                <input type="text" 
                onChange={handleChange}
                value={formdata.title}
                placeholder='Title'
                name="title" 
                id="title" />

                <label htmlFor="category">Category</label>
                 <input type="text" 
                 onChange={handleChange}
                 value={formdata.category}
                 placeholder='Category'
                 name="category" 
                 id="category" />

                <label htmlFor="price">Price</label>
                <input type="number" 
                value={formdata.price}
                onChange={handleChange}
                placeholder='Price'
                name="price" 
                id="price" />

                <label htmlFor="description">Description</label>
                <textarea 
                onChange={handleChange}
                value={formdata.description}
                placeholder='Description'
                name="description" 
                id="description">
                
                </textarea>


          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary"
          onClick={handleClose}
          type='submit'>
          {formdata.id ? "Edit Product" :"Add Product"}
          </Button>
        </Modal.Footer>
                
                </form>
            </div>
           

        </Modal.Body>
        
      </Modal>
    </>
  );
}
 


export default Example;