import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class Post extends Component {
    state = {
        post: null
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axiosApi.get('/posts/' + id + '.json');
        this.setState({post: response.data});
    }

    deletePost = () => {
        const id = this.props.match.params.id;
        axiosApi.delete('/posts/' + id + '.json');
        this.props.history.replace('/');
    };

    render() {
        const id = this.props.match.params.id;
        return this.state.post && (
            <div style={{padding: '15px'}}>
                <p style={{fontSize: '15px'}} className='font-italic'>{this.state.post.date}</p>
                <h3>{this.state.post.title}</h3>
                <p>{this.state.post.text}</p>
                <div>
                    <Button color='dark' className='mr-5' tag={Link} to={'/posts/' + id + '/edit'}>Edit</Button>
                    <Button color='danger' onClick={this.deletePost}>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Post;