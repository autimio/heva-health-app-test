import { render, screen } from '@testing-library/react'
import Input from '../components/atoms/Input'
import Select from '../components/atoms/Select'

it('renders input with placeholder', () => {
  render(<Input placeholder="Type here" />)
  expect(screen.getByPlaceholderText(/type here/i)).toBeInTheDocument()
})

it('renders select with options and custom chevron', () => {
  render(
    <Select aria-label="Classification">
      <option>All</option>
      <option>Class I</option>
    </Select>
  )
  expect(screen.getByRole('combobox', { name: /classification/i })).toBeInTheDocument()
  expect(screen.getAllByRole('option')).toHaveLength(2)
})

