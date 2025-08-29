import { render, screen } from '@testing-library/react'
import LabeledField from '../components/molecules/LabeledField'

it('renders label and child control', () => {
  render(
    <LabeledField label="Step amount">
      <input aria-label="Step amount" />
    </LabeledField>
  )
  expect(screen.getByText(/step amount/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/step amount/i)).toBeInTheDocument()
})

