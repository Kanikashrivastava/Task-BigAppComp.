import React , { Component } from 'react';
import  Charts  from '../src/components/Charts';
import TableData from '../src/components/helper';
class Home extends Component {
    render() {
        return (
            <div>
                <Charts/>
                <TableData/>
            </div>
        )
    }
}

export default Home;