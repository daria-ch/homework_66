import React, {Component, Fragment} from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';

const withLoaderHandler = (WrappedComponent, axios) => {

    return class withLoader extends Component {
        constructor(props) {
            super(props);

            this.state = {
                error: null,
                loading: false
            };

            axios.interceptors.request.use(request => {
                this.setState({loading: true});
                return request;
            });

            axios.interceptors.response.use(response => {
                this.setState({loading: false});
                return response;
            }, error => {
                this.setState({error});
                throw error;
            });

        }

        render() {
            return (
                <Fragment>
                    <WrappedComponent {...this.props}/>
                    {this.state.loading && <Backdrop/>}
                </Fragment>
            )
        }
    }
};

export default withLoaderHandler;