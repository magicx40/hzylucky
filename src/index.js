import ReactDOM from 'react-dom'
import App from './App'
// eslint-disable-next-line
import ResetCss from './assets/css/reset.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>,document.getElementById("root"));