import React from 'react';
import { Autocomplete } from '@mui/material';
import { AppBar, Toolbar, Typography, InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styless';
const Header = () => {
    const classes = useStyles();

    return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography varient="h5" className={classes.title}>
                Traval Advisor
            </Typography>
            <Box display="flex">
            <Typography varient="h6" className={classes.title}>
                Explore new places
            </Typography>
            <Autocomplete>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                </div>
            </Autocomplete>

            </Box>

        </Toolbar>

    </AppBar>
  )
}

export default Header
