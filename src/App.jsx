import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import './styles.css'

function App() {
  

  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap="2" className='mb-4'>
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div className="budget-grid">

      </div>
    </Container>
  )
}

export default App
