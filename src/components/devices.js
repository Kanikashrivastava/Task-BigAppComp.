import React , { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core'; 


const styles = theme => ({
  root: {
    width: '50%',
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper,
  },
  devices: {
      display: "inline-flex"
  },
  title: {
    float: 'left',
    fontSize: '25px'
  },
  age: {
      float: 'right',
      marginleft: 10
  },
  left: {
      float:'left',
      marginRight: 10
  }
});

export class DevicesData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ChartData: {
                labels: ['Desktop', 'Teblet', 'Mobile'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            23,
                            33,
                            44
                        ],
                        backgroundColor: [
                            '#ce2e2e',
                            '#f11ac2ba',
                            'skyblue',
                            
                        ]
                    }
                ]                
            }
        };
    };

    render() {
      const { classes } = this.props;
        return (
            <div className="Chart-Bar">
                    <div>
                <Typography >Demographics</Typography>
                <div className={classes.age}> 
                    <Typography className={classes.left}>Age</Typography>
                    <SvgIcon>
                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                    </SvgIcon>
                    <img className={classes.age} src="https://img.icons8.com/material-outlined/24/000000/more.png"></img>
                </div>
            </div>
                <Doughnut
                    data={this.state.ChartData}
                    options={{
                        maintainAspectRatio: false,
                        text: 'Desktop'
                    }}
                />
            </div>
        )
    }
} 



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