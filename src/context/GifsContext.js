import React, { useState } from "react"

const GifsContext = React.createContext({})

export function GifsContextProvider({ children }) {
    const [gifs, setGifs] = useState([])

    return <GifsContext.Provider value={{ gifs, setGifs }}>
        {children}
    </GifsContext.Provider>
}

export default GifsContext
