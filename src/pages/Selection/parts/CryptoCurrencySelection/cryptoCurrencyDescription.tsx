import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import { currencyCryptoType } from '../../../../types';
interface CryptoCurrencyDescriptionPropsType {
    currencyCrypto: currencyCryptoType;
}
const CryptoCurrencyDescription = (props: CryptoCurrencyDescriptionPropsType) => {
    const { currencyCrypto } = props;

    return currencyCrypto.description ? (
        <Fade in={true} timeout={1000}>
            <Paper elevation={1}>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        borderRadius: 5,
                        p: 2,
                        maxWidth: 300,
                    }}
                >
                    {currencyCrypto.description}
                </Box>
            </Paper>
        </Fade>
    ) : null;
};

export default CryptoCurrencyDescription;
