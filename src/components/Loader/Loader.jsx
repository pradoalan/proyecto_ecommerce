import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './Loader.css'

const Loader = () => {
    return (
        <div className="itemStyle">
            <div className="loader">
            <Spinner className="spinnerReact" animation="grow" variant="warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
            </div>
        </div>
    )
}

export default Loader
