import { render, screen, fireEvent } from '@testing-library/react'
import CounterControls from '../components/molecules/CounterControls'

it('calls handlers on click', () => {
  const inc = vi.fn()
  const dec = vi.fn()
  render(<CounterControls onIncrease={inc} onDecrease={dec} />)
  fireEvent.click(screen.getByLabelText(/increase/i))
  fireEvent.click(screen.getByLabelText(/decrease/i))
  expect(inc).toHaveBeenCalled()
  expect(dec).toHaveBeenCalled()
})
