import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/atoms/Button'

it('renders children and handles click', () => {
  const onClick = vi.fn()
  render(<Button onClick={onClick}>Click me</Button>)
  const btn = screen.getByRole('button', { name: /click me/i })
  expect(btn).toBeInTheDocument()
  fireEvent.click(btn)
  expect(onClick).toHaveBeenCalled()
})

it('respects disabled state', () => {
  const onClick = vi.fn()
  render(
    <Button disabled onClick={onClick}>
      Disabled
    </Button>
  )
  const btn = screen.getByRole('button', { name: /disabled/i })
  expect(btn).toBeDisabled()
})

