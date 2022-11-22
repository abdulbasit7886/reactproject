import React, { Component } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { userContext } from '../../App';

class Navbar extends Component {
  //  user = useContext(userContext)

    state = {  } 
    render() { 
        return (
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              React Application 
            </Typography>
          </Toolbar>
        );
    }
}
 
export default Navbar;