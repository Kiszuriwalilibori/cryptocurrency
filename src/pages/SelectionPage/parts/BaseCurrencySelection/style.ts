import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
export const MyFormControl = withStyles({
    root: {
        borderRadius: '2px',
        animation: 'fade_in 1s ease-in-out forwards',
        border: '2px solid #1E1F26',
        padding: '20px',
        width: '300px',
        margin: '2vh 0',
        boxShadow:
            'inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
        backgroundColor: '#2C303A',
        color: 'white',
        '&:hover': { border: '2px solid #EE760A' },
        '& .MuiFormLabel-root': { color: 'white', fontFamily: '"Lato", sans-serif', paddingBottom: '5px' },
        '& .MuiFormGroup-root': { flexDirection: 'row', justifyContent: 'space-around' },
        '& .MuiRadio-colorSecondary.Mui-checked': { color: '#EE760A' },
    },
})(FormControl);
