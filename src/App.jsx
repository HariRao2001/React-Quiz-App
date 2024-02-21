import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { StrictMode } from "react";

function App() {
    return <StrictMode>
        <Header></Header>
        <main>
            <Quiz></Quiz>
        </main>
    </StrictMode>
}

export default App;
