import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HeaderNav from '../components/organisms/HeaderNav'

it('renders app title and nav links', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/counter' }]}>
      <HeaderNav />
    </MemoryRouter>
  )
  expect(screen.getByText(/Heva Health App Test/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Counter \+ Clock/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /FDA Data/i })).toBeInTheDocument()
})

