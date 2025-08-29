import { render, screen, fireEvent } from '@testing-library/react'
import CounterPanel from '../components/organisms/CounterPanel'

it('increments by custom step', () => {
  render(<CounterPanel />)
  const stepInput = screen.getByLabelText(/step amount/i) as HTMLInputElement
  // initial value 0 is visible
  expect(screen.getByText('0')).toBeInTheDocument()
  fireEvent.change(stepInput, { target: { value: '3' } })
  fireEvent.click(screen.getByLabelText(/increase/i))
  expect(screen.getByText('3')).toBeInTheDocument()
})
