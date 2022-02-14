import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const SearchPageContainer = withStyles({
    root: {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        background: 'transparent',
        paddingTop: '10vh',
    },
})(Box);

export default SearchPageContainer;
