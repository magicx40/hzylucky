import ReactDOM from 'react-dom'
import App from './App'
// eslint-disable-next-line
import ResetCss from './assets/css/reset.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/store'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root"));