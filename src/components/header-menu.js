import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import {navigate} from 'gatsby'

export default function HeaderMenu() {
    const {title, menuLinks} = useSiteMetadata()
    
    return (
        <Menu pagination stackable widths={menuLinks.length + 1} size="huge">
            <Menu.Item header>{title}</Menu.Item>
            {menuLinks.map((link) => (
                link.subMenu && link.subMenu.length > 0 ? (
                    <Dropdown text={link.name} className='link item'>
                        <Dropdown.Menu>
                            {link.subMenu.map((subLink) => (
                                <Dropdown.Item key={subLink.name} onClick={() => navigate(subLink.link)}>
                                    {subLink.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <Menu.Item key={link.name} onClick={() => navigate(link.link)}>
                        {link.name}
                    </Menu.Item>
                )
            ))}
        </Menu>
    )
}

