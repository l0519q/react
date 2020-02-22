import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({
                error
            }))
        if (!error) {
            e.target.option.value = '';
        }      
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleFormSubmit}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">添加选项</button>
                </form>
            </div>
        )
    }
}

export default AddOption