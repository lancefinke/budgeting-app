import { Form, Modal, Button } from 'react-bootstrap'
import React from 'react'

export default function AddBudgetModule({ show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label className='mb-3' controlId='name'>Name</Form.Label>
                    <Form.Control type='text' required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mb-3' controlId='max'>Maximum Spending</Form.Label>
                    <Form.Control type='number' required min={0} step={0.01}></Form.Control>
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant='primary' type='submit'>Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
