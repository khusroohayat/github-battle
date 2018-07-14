import React from 'react'
import propTypes from 'prop-types'

const USER_DATA = {
    name: 'Khusroo Hayat',
    username: 'khusroohayat',
}

class ProfilePic extends React.Component {
    render() {
        return (
            <img
                src={'https://github.com/' + this.props.username + '.png?size=200'}
                style={{height: 100, width: 100}}
            />
        )
    }
}

ProfilePic.propTypes = {
    username: propTypes.string.isRequired
}

class ProfileName extends React.Component {
    render() {
        return (
             <div>
                 {this.props.name}
             </div>
        )
    }
}

ProfileName.propTypes = {
    name: propTypes.string.isRequired
}

class ProfileLink extends React.Component {
    render() {
        return (
            <a href={'https://www.github.com/' + this.props.username}>
            @{this.props.username}
            </a>
        )
    }
}

ProfileLink.propTypes = {
    username: propTypes.string.isRequired
}

class ProfileCard extends React.Component {
    render() {
        return (
            <div>
                <ProfilePic username={this.props.user.username} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
                </div>
        )
    }
}

ProfileCard.propTypes = {
    user: propTypes.shape({
        username: propTypes.string.isRequired,
        name: propTypes.string.isRequired
    }).isRequired
}

class App extends React.Component {
    render() {
        return (
            <div>
                <ProfileCard user={USER_DATA} />
                                </div>
        )
    }
}

module.exports = App;