import React from 'react'

function Comment(props) {
    return  <p>{props.text} <br />{props.user}</p>
}

export default Comment