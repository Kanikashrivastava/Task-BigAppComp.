import React, { Component } from 'react';
import EnhancedTable  from './table';
import axios from 'axios';

const Url = 'https://api.github.com/users';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let response = await axios.get(Url);
        // console.log(response.data);
        if (response != "") {
            this.setState({
                result: response.data
            });
        } else {
            alert ( "Please check your internet connection..." )
        }
    };
    render() {
        return (
            <div>
                <EnhancedTable result={this.state.result} />
            </div>
        );
    };
};

export default TableData;