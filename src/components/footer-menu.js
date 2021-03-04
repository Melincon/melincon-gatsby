import React from 'react'
import {Menu, Icon} from 'semantic-ui-react'
import {useSiteMetadata } from '../hooks/use-site-metadata'

export default function FooterMenu() {
    const {footerMenu} = useSiteMetadata()
    return (
        <Menu icon fluid widths={footerMenu.length} size="small" className='iconMenu'>
            {footerMenu.map((link) => (
                <Menu.Item target="_blank" rel="noopener noreferrer" key={link.name} href={link.link} className='iconMenuItem'>
                    <Icon color={link.iconColor} name={link.iconName} />
                </Menu.Item>
            ))}
        </Menu>
    )
}
  
