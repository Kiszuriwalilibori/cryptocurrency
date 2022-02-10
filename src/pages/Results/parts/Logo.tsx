import * as React from 'react';
interface LogoPropsType {
    src: string;
}

const Logo = (props: LogoPropsType) => {
    const { src } = props;
    return <img className="logo" src={src} alt={''} aria-label={'cryptocurrency logo image'} />;
};

export default Logo;
