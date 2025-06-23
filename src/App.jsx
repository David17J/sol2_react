import {useState} from 'react'
import './App.css'
import NotesApp from "./components/NotesApp.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NotesApp></NotesApp>
        </>
    )
}

export default App
