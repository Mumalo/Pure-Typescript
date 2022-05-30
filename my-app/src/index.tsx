import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import {App} from "./components/App";
import {reducers} from "./reducers";


const store = configureStore({
    reducer: reducers
})

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)
