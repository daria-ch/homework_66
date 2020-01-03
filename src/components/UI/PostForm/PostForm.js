import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const PostForm = props => {
    return (
        <Form onSubmit={props.formOnSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input required
                       type="text"
                       name="title"
                       id="title"
                       placeholder="Enter title"
                       autoComplete='off'
                       value={props.inputValue}
                       onChange={props.inputOnChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input required
                       type="textarea"
                       name="description"
                       id="description"
                       placeholder="Enter description..."
                       autoComplete='off'
                       value={props.textareaValue}
                       onChange={props.textareaOnChange}/>
            </FormGroup>
            <Button color="dark">Save</Button>{' '}
        </Form>
    );
};

export default PostForm;