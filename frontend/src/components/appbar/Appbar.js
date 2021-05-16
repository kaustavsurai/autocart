import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoname: {
    flexGrow: 1,
    textTransform:"uppercase",
    letterSpacing:5
  },
}));
const Appbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="header-top">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.logoname}>
            AutoCart
          </Typography>
          <Button color="inherit"><Link to="Payment" className="text-white">Link</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar
