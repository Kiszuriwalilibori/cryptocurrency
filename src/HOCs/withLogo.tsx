import * as React from 'react';
import Logo from '../pages/Selection/parts/Logo';

function WithSnackBarHOC<T>(Component: React.ComponentType<T>) {
    return (props: T) => (
        <>
            <Logo />
            <Component {...props} />
        </>
    );
}

export default WithSnackBarHOC;
