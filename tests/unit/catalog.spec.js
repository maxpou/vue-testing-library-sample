import { fireEvent, waitFor } from '@testing-library/vue'
import { render as r } from '../render'
import { getStarships, getStarship } from '../../src/services/swapi.api'
import starshipsData from '../__fixtures__/swapi.starships-page-1.json'
import starshipsData2 from '../__fixtures__/swapi.starships-page-2.json'
import falconData from '../__fixtures__/swapi.starships.10.json'
import App from '../../src/App.vue'

jest.mock('../../src/services/swapi.api')

beforeEach(() => {
  getStarships
    .mockImplementation(page => page === 1 ? { data: starshipsData } : { data: starshipsData2 })
  getStarship.mockResolvedValue({ data: falconData })
})

afterEach(jest.resetAllMocks)

async function render () {
  const utils = await r(App)
  await fireEvent.click(utils.getByText('Catalog'))
  return utils
}

describe('Catalog', () => {
  it('should render', async () => {
    await render(App)
  })

  it('should show products name, detail and price', async () => {
    const { getByText } = await render(App)

    getByText('Executor')
    getByText('Kuat Drive Yards, Fondor Shipyards')
    getByText('$1,143,350,000.00')
  })

  it('should be able to filter products', async () => {
    const { queryByText, getByLabelText, getByText } = await render(App)
    // await fireEvent.change(getByTestId('catalog-filter'), { target: { value: 'wing' } })
    await fireEvent.change(getByLabelText('Filter results'), { target: { value: 'wing' } })

    expect(queryByText('Death Star')).not.toBeInTheDocument()
    expect(getByText('X-wing')).toBeInTheDocument()
    expect(getByText('Y-wing')).toBeInTheDocument()
  })

  it('should be able to load more data', async () => {
    getStarships
      .mockImplementation(page => page === 1 ? { data: starshipsData } : { data: starshipsData2 })
    const { getByText, queryByText } = await render(App)

    expect(queryByText('Naboo fighter')).not.toBeInTheDocument()
    await fireEvent.click(getByText('Load more data...'))
    expect(queryByText('Naboo fighter')).toBeInTheDocument()
  })

  it('basket should be empty', async () => {
    const { getByText } = await render(App)
    await fireEvent.click(getByText('Basket'))

    await waitFor(() => getByText('Your basket is empty!'))
  })

  it('should add items to basket', async () => {
    const { getByLabelText, getByRole, getByText } = await render(App)

    await fireEvent.click(getByLabelText('Add Millennium Falcon'))
    await fireEvent.click(getByLabelText('Add Imperial shuttle'))
    await fireEvent.click(getByLabelText('Add Imperial shuttle'))

    expect(getByRole('navigation')).toHaveTextContent('Basket (3)')
    await fireEvent.click(getByText('Basket (3)'))

    getByText('Millennium Falcon')
    getByText('Imperial shuttle')
    getByText('$580,000.00')
  })

  it('should load spaceship detail page', async () => {
    const { getByText } = await render(App)
    await fireEvent.click(getByText('Millennium Falcon'))
    await waitFor(() => getByText('Manufacturer'))

    getByText('YT-1300 light freighter')
    getByText('Corellian Engineering Corporation')
    getByText('6')
    getByText('$100,000.00')
  })

  it('should not load starships when I load a 2nd time the homepage', async () => {
    const { getByText } = await render(App)
    await fireEvent.click(getByText('Basket'))
    await fireEvent.click(getByText('Catalog'))

    expect(getStarships).toHaveBeenCalledTimes(1)
  })
})
