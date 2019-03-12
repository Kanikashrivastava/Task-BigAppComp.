import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DevicesData from './devices'

const styles = theme => ({
    root: {
      width: '50%',
      maxWidth: 260,
      backgroundColor: theme.palette.background.paper,
      marginTop: 40
    },
    devices: {
        display: "inline-flex"
    }
  });
  


function InsetDividers(props) {
    const { classes } = props;
    return (
        <div className={classes.devices}>
        <DevicesData/>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary="23.2%" secondary="Desktop" />
        </ListItem>
        <li>
          <Divider variant="inset" />
        </li>
        <ListItem>
          <ListItemText primary="33.4%" secondary="Teblet" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="44.3%" secondary="Mobile" />
        </ListItem>
      </List>
      
      </div>
    );
  }
  
  InsetDividers.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(InsetDividers);