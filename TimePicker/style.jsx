import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    position: 'relative',
    cursor: 'pointer',
    color: '#4D4D4D',
  },
  tooltip: {
    position: 'absolute',
    top: '8px',
    left: '-23px',
    display: 'flex',
    padding: '12px',
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.1)',
    zIndex: '1',
    fontFamily: '"Roboto", sans-serif'
  },
  hidden: {
    display: 'none'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '18px',
    transition: '5s',

    '& svg:hover': {
      transform: 'scale(1.3)'
    },
    '&:not(:last-child)': {
      marginRight: '15px',
    },
    '&:last-child': {
      minWidth: '30px'
    }
  },
  icon: {
    color: '#1A7EE3',
    fontSize: '20px',

    '&:not(:last-child)': {
      marginBottom: '5px'
    },
    '&:not(:first-child)': {
      marginTop: '5px'
    }
  },
  angle: {
    position: 'absolute',
    top: '-8px',
    left: '43%',
    width: '15px',
    height: '15px',
    background: ' #fff',
    transform: 'rotate(45deg)',
    boxShadow: '-4px -4px 6px rgba(0, 0, 0, 0.1)',
  },
  duoRadius: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '25px',
    position: 'relative',
    left: '-10px',
    top: '-4px',
    lineHeight: '0',
    width: '0',
  }
}));

export default useStyles;
