import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button, Card, CardBody, CardSubtitle, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";
import withLoaderHandler from "../components/hoc/withLoaderHandler";

class Blog extends Component {
    state = {
        blog: []
    };

    async componentDidMount() {
        const response = await axiosApi.get('/posts.json');
        if (response.data) {
            this.setState({blog: response.data});
        }
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.blog).map(post => (
                    <Card key={this.state.blog[post].title}>
                        <CardBody>
                            <CardSubtitle className='font-italic' style={{fontSize: '12px'}}>Created
                                on: {this.state.blog[post].date}</CardSubtitle>
                            <CardTitle
                                style={{fontSize: '30px'}}>{this.state.blog[post].title}</CardTitle>
                            <Button tag={Link} to={'/posts/' + post} color="light">Read more>></Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        )
    }
}

export default withLoaderHandler(Blog, axiosApi);