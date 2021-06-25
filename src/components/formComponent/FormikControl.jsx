import React from 'react'

// This Component decide which Form Field needs to be rendered based on specific props used
function FormikControl(controlProps) {
    const { controlProps } = this.props
    switch(controlProps) {
        case 'input':
        case 'textarea':
        case'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null
    }
}

export default FormikControl
