import { render, screen } from '@testing-library/react'
import AppLayout from '../components/templates/AppLayout'

it('renders header, title and children', () => {
  render(
    <AppLayout header={<div>HEADER</div>} title="A Title">
      <div>BODY</div>
    </AppLayout>
  )
  expect(screen.getByText('HEADER')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'A Title' })).toBeInTheDocument()
  expect(screen.getByText('BODY')).toBeInTheDocument()
})

