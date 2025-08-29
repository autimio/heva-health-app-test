import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import FDAData from '../pages/FDAData'

const mockResults = {
  meta: { disclaimer: '', terms: '', license: '', last_updated: '2025-01-01', results: { skip: 0, limit: 50, total: 1 } },
  results: [
    {
      recall_number: 'F-0002',
      classification: 'Class II',
      recalling_firm: 'Beta Inc',
      product_description: 'Beta Product',
      reason_for_recall: 'Contamination',
      report_date: '20240202',
    },
  ],
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => mockResults }) as any))
})

afterEach(() => {
  ;(global.fetch as any).mockRestore?.()
})

it('loads and renders FDA records', async () => {
  render(
    <MemoryRouter>
      <FDAData />
    </MemoryRouter>
  )

  await waitFor(() => {
    expect(screen.getByText(/Beta Inc/)).toBeInTheDocument()
    expect(screen.getByText(/F-0002/)).toBeInTheDocument()
  }, { timeout: 10000 })
})
