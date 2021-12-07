import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import { act} from 'react-dom/test-utils';
import { gifService } from 'services/gifService';
import App from './App';

beforeAll(() => {
    gifService.fetchGifs = () => Promise.resolve([])
    gifService.getNextGifs = () => Promise.resolve([])

})

test('la ruta default renderiza sin errores', async () => {
    const { findByText } = render(<App />)
    const title = await findByText(/Última búsqueda/i)
    expect(title).toBeInTheDocument()
})

test('se pueden buscar gifs', async () => {
        const { findByRole, findByText } = render(<App />)

        const input = await screen.findByRole('textbox')
        const button = await screen.findByRole('button')

        fireEvent.change(input, { target: { value: 'Matrix' } })
        fireEvent.click(button)

        const title = await screen.findByText('Matrix')
        expect(title).toBeVisible()
})

// test('si no se ingresa un texto de búsqueda el bóton queda deshabilitado', async () => {
//     render(<App />)
//     const button = await screen.findByTestId('boton-buscar')
//     expect(button).toBeDisabled()
// })
