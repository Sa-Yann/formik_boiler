import React from 'react'

function TextError(props) {
console.log("🚀 ~ file: TextError.jsx ~ line 4 ~ TextError ~ props", props)
// props ets la valeur de name="value" inserted" inserée definie dans le error msg
    return (
        <div className="error">
            {/* we render {props.children} within the a div to be able to style it */}
            {props.children}
        </div>
    )
}

export default TextError
