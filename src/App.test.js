import { fireEvent, render } from '@testing-library/react';
// import { act} from 'react-dom/test-utils';
import { gifService } from 'services/gifService';
import App from './App';

const FAKE_DATA = { gifs: [], hasNextPage: false }

beforeAll(() => {
    gifService.fetchGifs = () => Promise.resolve(FAKE_DATA)
    gifService.getNextGifs = () => Promise.resolve(FAKE_DATA)
})

test('la ruta default renderiza sin errores', async () => {
    const { findByText } = render(<App />)
    const title = await findByText(/Última búsqueda/i)
    expect(title).toBeInTheDocument()
})

test('se pueden buscar gifs', async () => {
    const { findByRole, findByText } = render(<App />)

    const input = await findByRole('textbox')
    const button = await findByRole('button')

    fireEvent.change(input, { target: { value: 'Matrix' } })
    fireEvent.click(button)

    const title = await findByText('Matrix')
    expect(title).toBeVisible()
})

// test('si no se ingresa un texto de búsqueda el bóton queda deshabilitado', async () => {
//     const { findByTestId } = render(<App />)
//     const button = await findByTestId('boton-buscar')
//     expect(button).toBeDisabled()
// })
