import React, {Component} from 'react';
import axiosApi from "../axios-api";
import PostForm from "../components/UI/PostForm/PostForm";

class NewPost extends Component {
    state = {
        title: '',
        description: '',
        date: '',
    };

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = async (e) => {
        e.preventDefault();

        const postTime = new Date();
        const date = postTime.toLocaleString();

        const post = {
            title: this.state.title,
            text: this.state.description,
            date: date
        };

        await axiosApi.post('/posts.json', post);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add new post</h1>
                <PostForm
                    formOnSubmit={this.formSubmitHandler}
                    inputValue={this.state.title}
                    inputOnChange={this.inputChangeHandler}
                    textareaValue={this.state.description}
                    textareaOnChange={this.inputChangeHandler}
                />
            </div>
        );
    }
}

export default NewPost;