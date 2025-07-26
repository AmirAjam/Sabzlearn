import React from 'react'

const calFinalPrice = (price,discount) => {
    return (100 - discount) * price / 100
}

export default calFinalPrice