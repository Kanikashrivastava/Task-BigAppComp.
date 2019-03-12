import React , { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = theme => ({
    root: {
      display: 'inline-flex',
      textAlign: 'center'
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
      },
      Doughnut: {
          height: '217px'
      }
  });


 
class NewUserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ChartData: {
                labels: ['New User Growth', 'Conversion Rate'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            9.43,
                            6.43
                        ],
                        backgroundColor: [
                            'grey',
                            '#ce2e2e'                            
                        ]
                    }
                ]
            }
        }
    }
    

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Doughnut}>
                <div>
                    <div>
                        <Typography className={classes.title}>New users</Typography>
                    </div>
                    <div className={classes.age}> 
                        <Typography className={classes.left}>Last 30 days.</Typography>
                        <SvgIcon>
                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                        </SvgIcon>
                        <img className={classes.age} src="https://img.icons8.com/material-outlined/24/000000/more.png"/>
                    </div>
            </div>
                <Doughnut
                
                    data={this.state.ChartData}
                    options={{
                        maintainAspectRatio: false,
                        rotation: 1 * Math.PI,
                        circumference: 1 * Math.PI
                    }}
                />
                <Divider />
                <div className={classes.userRatio}>
                    <List className={classes.root}>
                        <ListItem>
                        <ListItemText primary="6.43%" secondary="New users Growth" />
                        </ListItem>
                        <li>
                        <Divider />
                        </li>
                        <ListItem>
                        <ListItemText primary="9.44%" secondary="Conversion Rate" />
                        </ListItem>
                    </List>
                </div>
            </div>
        )
    }
} 
NewUserData.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(NewUserData);