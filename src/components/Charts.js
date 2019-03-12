import React , { Component} from  'react';
import DemographicsData from './demographics';
import InsetDividers from './sidedataDevices';
import NewUserData from './newUsers';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    root: {
        display : 'inline-flex',
        grow: 2
    },
    card: {
      minWidth: 430,
      margin: 10
    }
};

function Charts(props) {
    const { classes } = props;
  
    return (
        <div className={classes.root}>
        <Card className={classes.card}>
            <CardContent>
                <InsetDividers/>
            </CardContent>
        </Card>
        <Card className={classes.card}>
            <CardContent>
                <DemographicsData/>
            </CardContent>
        </Card>
        <Card className={classes.card}>
            <CardContent>
                <NewUserData/>
            </CardContent>
        </Card>
      </div>
    );
  }
  
Charts.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Charts);