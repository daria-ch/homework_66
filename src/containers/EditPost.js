import React, {Component} from 'react';
import axiosApi from "../axios-api";
import PostForm from "../components/UI/PostForm/PostForm";
import Spinner from "../components/UI/Spinner/Spinner";

class EditPost extends Component {
    state = {
        title: '',
        description: '',
        date: '',
        loading: false
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axiosApi.get('/posts/' + id + '.json');
        this.setState({title: response.data.title, description: response.data.text, date: response.data.date});
    }

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = async (e) => {
        e.preventDefault();

        this.setState({loading: true});

        const postTime = new Date();
        const date = postTime.toLocaleString();

        const editedPost = {
            title: this.state.title,
            text: this.state.description,
            date: date
        };
        this.setState({title: '', description: ''});

        const id = this.props.match.params.id;
        await axiosApi.put('/posts/' + id + '.json', editedPost);
        this.props.history.replace('/posts/' + id);
    };

    render() {
        let form = (
            <PostForm
                formOnSubmit={this.formSubmitHandler}
                inputValue={this.state.title}
                inputOnChange={this.inputChangeHandler}
                textareaValue={this.state.description}
                textareaOnChange={this.inputChangeHandler}
            />
        );
        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div>
                <h1>Edit your post</h1>
                {form}
            </div>
        );
    }
}

export default EditPost;
