import * as React from 'react';
export const ListOfAvailableCryptosContext = React.createContext();
/**
 * That function is out of use. perhaps will be used later, it could replace redux
 * @param {*} param0
 * @returns
 */
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
