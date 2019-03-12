import React , { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core'; 


const styles = theme => ({
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
  head: {
    // width: '100%'
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
                ],
                text: '9,204',
                color: [
                    'black',
                ]                
            }
        };
    };

    render() {
      const { classes } = this.props;
        return (
            <div className="Chart-Bar">
              <div className={classes.head}>
                <Typography className={classes.title}>Devices</Typography>
                <div className={classes.age}> 
                    <Typography className={classes.left}>Overview</Typography>
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
DevicesData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DevicesData);

