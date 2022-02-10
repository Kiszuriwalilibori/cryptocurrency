import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const CryptoCurrencyContainer = withStyles({
    root: {
        width: '100%',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '30vh',
    },
})(Box);

export default CryptoCurrencyContainer;
