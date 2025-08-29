import { formatYyyyMmDd } from '../utils/date'

it('formats YYYYMMDD into YYYY-MM-DD', () => {
  expect(formatYyyyMmDd('20240109')).toBe('2024-01-09')
  expect(formatYyyyMmDd('')).toBe('-')
  expect(formatYyyyMmDd(undefined)).toBe('-')
  expect(formatYyyyMmDd('bad')).toBe('bad')
})

