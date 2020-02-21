import React from "react"
import DomLayout from "../../components/DomLayout/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
    name: 'dacha_180',
    title: "Дачный домик",
    material: "Бревно 180",
    path: "/catalog/dacha_180/",
    v: 27,
    sice: "5.46 x 8.26",
    description: "Компактный дачный домик",
    descriptionCard: "Тестовое описание",

}

function IndexPage() {
    const data = useStaticQuery(graphql`
    query {
        small:allImageSharp(filter: {fluid: {originalName: {regex: "/dacha_180/"}}}) {
          nodes {
            fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        big:allImageSharp(filter: {fluid: {originalName: {regex: "/dacha_180/"}}}) {
          nodes {
            fluid {
              originalImg
            }
          }
        }
        first: file(name: {eq: "1_dacha_180 (1)"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        < DomLayout
            imgSmall={data.small.nodes}
            imgBig={data.big.nodes}
            imgFirst={data.first.childImageSharp}
            frontmatter={frontmatter}
        />

    )
}

export default IndexPage
