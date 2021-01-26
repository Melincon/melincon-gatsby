import React, {Component} from 'react'
import {Menu, Pagination} from 'semantic-ui-react'
import {Link} from 'gatsby'

export default class HeaderMenu extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem } = this.state

        return (
            <Menu fluid stackable widths="five" size="huge">
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                    to='/'
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    name='Sites'
                    active={activeItem === 'Sites'}
                    onClick={this.handleItemClick}
                    to='/Sites/'
                >
                    Sites
                </Menu.Item>
                <Menu.Item
                    name='Software'
                    active={activeItem === 'Software'}
                    onClick={this.handleItemClick}
                    to='/software/'
                >
                    Software
                </Menu.Item>
                <Menu.Item
                    name='About'
                    active={activeItem === 'About'}
                    onClick={this.handleItemClick}
                    to='/about/'
                >
                    About
                </Menu.Item>
                <Menu.Item
                    name='Contact'
                    active={activeItem === 'Contact'}
                    onClick={this.handleItemClick}
                    to='/contact/'
                >
                    Contact
                </Menu.Item>
            </Menu>
        )
    }
}