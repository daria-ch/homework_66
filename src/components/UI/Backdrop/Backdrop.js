import React, {Fragment} from 'react';
import './Backdrop.css';
import Spinner from "../Spinner/Spinner";

const Backdrop = ({onClick, show}) => {
    return (
        show ? <Fragment>
            <div className='Backdrop' onClick={onClick}/>
            <Spinner/>
        </Fragment> : null
    );
};

export default Backdrop;