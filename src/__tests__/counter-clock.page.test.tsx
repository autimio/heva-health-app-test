import { render, screen } from '@testing-library/react'
import CounterClock from '../pages/CounterClock'

it('renders current time label and counter panel', () => {
  render(<CounterClock />)
  expect(screen.getByText(/Current time/i)).toBeInTheDocument()
  expect(screen.getByText('0')).toBeInTheDocument()
  expect(screen.getByText(/\d{1,2}:\d{2}:/)).toBeInTheDocument()
})
