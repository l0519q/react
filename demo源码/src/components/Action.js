import React from 'react'

const Action = props => {
    return (
        <div>
            <button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>随机输出一个选项</button>
        </div>
    )
}

export default Action