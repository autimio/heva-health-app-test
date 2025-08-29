import { render, screen } from '@testing-library/react'
import FDAResults from '../components/organisms/FDAResults'

const items = [
  {
    recall_number: 'F-0001',
    classification: 'Class I',
    recalling_firm: 'Acme',
    product_description: 'Test Product',
    reason_for_recall: 'Reason',
    city: 'NYC',
    state: 'NY',
    report_date: '20240101',
  },
]

it('renders skeleton when loading', () => {
  render(<FDAResults items={[]} loading skeletonRows={2} />)
  expect(screen.getByText(/Recall #/i)).toBeInTheDocument()
})

it('renders data rows when not loading', () => {
  render(<FDAResults items={items} />)
  expect(screen.getByText('F-0001')).toBeInTheDocument()
  expect(screen.getByText('Acme')).toBeInTheDocument()
})

