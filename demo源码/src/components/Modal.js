import React from 'react'
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

const Modal = props => {
    return (
        <ReactModal
            className="modal"
            isOpen={!!props.selectedOption}
            closeTimeoutMS={200}
            onRequestClose={props.handleClearSelectedOption}
        >
            <h3 className="modal__title">选中的选项</h3>
            <p className="modal__body">{props.selectedOption}</p>
            <button className="button" onClick={props.handleClearSelectedOption}>
                好的
            </button>
        </ReactModal>
    )
}

export default Modal