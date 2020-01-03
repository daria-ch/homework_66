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

            this.state.interceptorId = axios.interceptors.response.use(response => {
                this.setState({loading: false});
                return response;
            }, error => {
                this.setState({error});
                throw error;
            });

            axios.interceptors.request.use(request => {
                this.setState({loading: true});
                return request;
            });
        }

        componentWillUnmount() {
            axios.interceptors.response.eject(this.state.interceptorId);
        }

        dismissLoading = () => {
            this.setState({loading: false})
        };

        render() {
            return (
                <Fragment>
                    <Backdrop show={!!this.state.loading}
                              onClick={this.dismissLoading}/>
                    <WrappedComponent {...this.props}/>
                </Fragment>
            )
        }
    }
};

export default withLoaderHandler;