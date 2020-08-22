import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    
    render() {
        return(
        <>
        <button onClick={() => {this.setState({isOpen: true})}}>Open modal</button>
        {this.state.isOpen && <div className="modal">
            <div className="modal-body">
                <h1>Modal</h1>
                <p>modal content</p>
                <button onClick={() => {this.setState({isOpen: false})}}>close</button>
            </div>
        </div>}
        </>
        )
    }
}