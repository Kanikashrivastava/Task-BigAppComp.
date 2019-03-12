import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Bar} from 'react-chartjs-2';
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
    }
  });

class DemographicsData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ChartData: {
                labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                datasets: [
                    {
                        label: 'demographics',
                        data: [
                            9,
                            7,
                            22,
                            16,
                            11,
                            6,
                            9
                        ],
                        backgroundColor: [
                            '#03a9f4',
                            '#03a9f4',
                            '#03a9f4',
                            '#03a9f4',
                            '#03a9f4',
                            '#03a9f4',
                            '#03a9f4',
                            '#03a9f4'
                            
                        ]
                    }
                ]
            }
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div className="Chart-Bar">
            <div>
                <Typography className={classes.title}>Demographics</Typography>
                <div className={classes.age}> 
                    <Typography className={classes.left}>Age</Typography>
                    <SvgIcon>
                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                    </SvgIcon>
                    <img className={classes.age} src="https://img.icons8.com/material-outlined/24/000000/more.png"></img>
                </div>
            </div>
                <Bar
                    data={this.state.ChartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
                
            </div>
        )
    }
} 
DemographicsData.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(DemographicsData);

