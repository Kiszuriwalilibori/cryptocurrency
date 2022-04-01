import * as React from 'react';
import Loader from '../../../components/Loader';
interface propsType {
    loading: boolean;
}

const FetchingStatusIndicator = (props: propsType) => {
    const { loading } = props;
    if (loading) return <Loader />;
    return null;
};

export default FetchingStatusIndicator;
