import { useEffect,useState } from 'react';
import  { Modal } from 'react-bootstrap';

function App() {

const[show,setShow]=useState(false);

useEffect(()=>{
  setTimeout(()=>{
      setShow(true);
  },2000)
})




  return (
    <div className="container"> 
       <Modal show={show}>
        <Modal.Header closeButton  onClick={()=>setShow(false)}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" placeholder="Enter email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Modal.Body>
      </Modal>


    </div>

  );
}

export default App;