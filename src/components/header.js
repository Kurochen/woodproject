import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  logo: {
    fontFamily: 'Rajdhani',
    fontSize: '2.2em',
    '& span:nth-child(1)': {
      color: '#9da852',
      position: 'relative',
      top: -1,
    },
    '& span:nth-child(2)': {
      color: '#634833',
      position: 'relative',
      top: 1,
    },
  },
  link: {
    textDecoration: `none`,
  }
});

export default function Header({ siteTitle }) {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link
          to="/"
          className={classes.link}
        >
          <Logo />
        </Link>
      </Toolbar>
    </AppBar>

  );
}

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <span>Wood</span>
      <span>project</span>
    </div>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}