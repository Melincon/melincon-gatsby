import {useStaticQuery, graphql} from "gatsby"

export const useSiteMetadata = () => {
    const {site} = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                      menuLinks {
                        link
                        name
                        subMenu {
                          link
                          name
                        }
                      }
                      title
                      author
                      description
                      tagLine
                      footerMenu {
                        iconName
                        link
                        name
                        iconColor
                      }
                    }
                  }
            }
        `
    )
    return site.siteMetadata
}