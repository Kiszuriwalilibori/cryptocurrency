import * as React from 'react';
import { useHistory } from 'react-router-dom';
const ReturnToSelectionButton = (): JSX.Element => {
    const history = useHistory();
    return (
        <button
            className={'currencySettingButton enabled'}
            onClick={() => {
                history.push('/');
            }}
        >
            Powrót do wyboru
        </button>
    );
};

export default React.memo(ReturnToSelectionButton);
