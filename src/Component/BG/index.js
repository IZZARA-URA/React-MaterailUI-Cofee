import React from 'react'

const BG = () => {
    return(
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/coffee.png'})` ,
            backgroundRepeat: 'no-repeat',
            backgroundSize:' 100% 100% ',
            width: "100%",
            height:'100vh'
        }}>
           asds
        </div>
    )
}

export default BG
