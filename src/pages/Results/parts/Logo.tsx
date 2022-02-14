import * as React from 'react';

interface LogoPropsType {
    URL: string;
}
/**
 * creates Logo of cryptocurrency. Firstly createscomplete URL
 * @param URL string being critical part of URL
 * @returns logo component
 */
const Logo = (props: LogoPropsType) => {
    const { URL } = props;
    const cryptoLogoUrl = URL ? process.env.REACT_APP_CRYPTOS_GENERAL + URL + '?width=30' : '';
    return cryptoLogoUrl ? (
        <img className="logo" src={cryptoLogoUrl} alt={''} aria-label={'cryptocurrency logo image'} />
    ) : null;
};

export default Logo;
