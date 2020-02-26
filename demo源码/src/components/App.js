import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import Modal from './Modal'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
    }
    // 加载组件时调用
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({
                    options
                }))
            }
        } catch (e) {
            // 什么都不做
        }
    }
    // 数据更新时调用
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // 卸载组件时调用
    componentWillUnmount() {
        console.log('卸载')
    }
    handleRemoveOption(option) {
        this.setState(prevState => ({
            options: prevState.options.filter(item => item !== option)
        }))
    }
    handleAddOption(option) {
        if (!option) {
            return '选项不能为空';
        } else if (this.state.options.includes(option)) {
            return '不能输入重复的选项';
        } else {
            this.setState(prevState => ({
                options: prevState.options.concat(option)
            }))
        }
    }
    handleRemoveAll() {
        this.setState(() => ({
            options: []
        }))
    }
    handlePick() {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        this.setState(() => ({
            selectedOption: option
        }))
    }
    handleClearSelectedOption() {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
    render() {
        const subTitle = '把你的命运交给电脑吧';
        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <Modal
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        )
    }
}
App.defaultProps = {
    options: []
}

export default App