import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It is your profile page</p>
                <img style={imageStyle} src="https://seeklogo.net/wp-content/uploads/2011/08/manchester-united-logo-vector.png" />
            </div>
        )

    }
}

export default Home
