import { fireEvent, screen } from '@testing-library/vue'
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
  const utils = r(App)
  await fireEvent.click(utils.getByText('Catalog'))
  return utils
}

describe('Catalog', () => {
  it('should render', () => {
    render(App)
  })

  it('should show products name, detail and price', async () => {
    await render(App)

    screen.getByText('Executor')
    screen.getByText('Kuat Drive Yards, Fondor Shipyards')
    screen.getByText('$1,143,350,000.00')
  })

  it('should be able to filter products', async () => {
    await render(App)
    await fireEvent.change(screen.getByLabelText('Filter results'), { target: { value: 'wing' } })

    expect(screen.queryByText('Death Star')).not.toBeInTheDocument()
    expect(screen.getByText('X-wing')).toBeInTheDocument()
    expect(screen.getByText('Y-wing')).toBeInTheDocument()
  })

  it('should be able to load more data', async () => {
    getStarships
      .mockImplementation(page => page === 1 ? { data: starshipsData } : { data: starshipsData2 })
    await render(App)

    expect(screen.queryByText('X-wing')).toBeInTheDocument()
    expect(screen.queryByText('Naboo fighter')).not.toBeInTheDocument()

    await fireEvent.click(screen.getByText('Load more data...'))

    expect(screen.queryByText('Naboo fighter')).toBeInTheDocument()
  })

  it('should add items to basket', async () => {
    await render(App)

    await fireEvent.click(screen.getByLabelText('Add Millennium Falcon'))
    await fireEvent.click(screen.getByLabelText('Add Imperial shuttle'))
    await fireEvent.click(screen.getByLabelText('Add Imperial shuttle'))

    expect(screen.getByRole('navigation')).toHaveTextContent('Basket (3)')
    await fireEvent.click(screen.getByText('Basket (3)'))

    await screen.findByText('Total')

    screen.getByText('Millennium Falcon')
    screen.getByText('Imperial shuttle')
    screen.getByText('$580,000.00')
  })

  it('basket should be empty', async () => {
    await render(App)
    await fireEvent.click(screen.getByText('Basket'))

    await screen.findByText('Your basket is empty!')
  })

  it('should load spaceship detail page', async () => {
    await render(App)

    fireEvent.click(screen.getByText('Millennium Falcon'))
    await screen.findByText('Manufacturer')

    screen.getByText('YT-1300 light freighter')
    screen.getByText('Corellian Engineering Corporation')
    screen.getByText('6')
    screen.getByText('$100,000.00')
  })

  it('should not load starships when I load a 2nd time the homepage', async () => {
    await render(App)
    await fireEvent.click(screen.getByText('Basket'))
    await fireEvent.click(screen.getByText('Catalog'))

    expect(getStarships).toHaveBeenCalledTimes(1)
  })
})
