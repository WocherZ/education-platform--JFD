import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    courseSection: {
        paddingTop: '90px',
        paddingBottom: '113px'
    },
    cardGrid: {
        paddingTop: '0'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
        height: '516px'
    },
    cardMedia: {
        minWidth: '456px',
        minHeight: '283px',
        flexShrink: '0'
    },
    courseUser: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'
    },
    userName: {
        paddingLeft: '20px',
        paddingBottom: '5px',
        color: '#96989B',
        fontFamily: 'Poppins', 
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal'
    },
    courseRating: {
        display: 'flex',
        paddingTop: '33px'
    },
    raitingStar: {
        paddingLeft: '5px'
    }
}));

export default useStyles;