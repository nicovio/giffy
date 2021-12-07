import { render } from '@testing-library/react';
import Gif from './Gif';

const gif = { id: 1, title: "test gif", image: "" }

describe('Componente Gif', () => {
    test('renderiza y muestra el título del gif', async () => {
        const { findByText } = render(<Gif gif={gif} />)
        const title = await findByText(/test gif/i)
        expect(title).toBeInTheDocument()
    })
})