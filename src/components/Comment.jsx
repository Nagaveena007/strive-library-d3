import { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Comment extends Component {
  state = {};
  render() {
    return (
      <Modal.Dialog>
        {this.props.comments.map((c, i) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title key={i}>Comments</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{c.comment}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save</Button>
            </Modal.Footer>
          </>
        ))}
      </Modal.Dialog>
    );
  }
}
export default Comment;
