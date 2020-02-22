import React from 'react'
import Option from './Option'

const Options = props => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">你的选项</h3>
                <button className="button button--link" onClick={props.handleRemoveAll}>删除所有</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">请添加一个选项</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                        handleRemoveOption={props.handleRemoveOption} 
                        option={option} 
                        key={`option_${index}`}
                        count={index + 1}
                    />
                ))
            }
        </div>
    )
}

export default Options