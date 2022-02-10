import * as React from 'react';
export const ListOfAvailableCryptosContext = React.createContext();

const ListOfAvailableCryptosContextProvider = ({ children }) => {
    const [list, setList] = React.useState('');

    return (
        <ListOfAvailableCryptosContext.Provider
            value={{
                listOfAvailableCryptos: list,
                setListOfAvailableCryptos: data => setList(data),
            }}
        >
            {children}
        </ListOfAvailableCryptosContext.Provider>
    );
};

export default ListOfAvailableCryptosContextProvider;
