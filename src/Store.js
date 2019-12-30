import React, { Component } from 'react'

const Context = React.createContext();

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

export class StoreProvider extends Component {
    render() {
        return (
            <>
              <Provider>
                </Provider> 
            </>
        )
    }
}

export default StoreProvider
