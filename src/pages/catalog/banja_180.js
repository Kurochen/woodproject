import React from "react"
import DomLayout from "../../components/DomLayout/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
    name: 'banja_180',
    title: "Баня 180",
    material: "Бревно 180",
    path: "/catalog/banja_180/",
    v: 17.56,
    sice: "4.4 x 7.5",
    description: 'Стандартная баня с классической планировкой',
    descriptionCard: "Тестовое описание",

}

function IndexPage() {
    const data = useStaticQuery(graphql`
    query {
        small:allImageSharp(filter: {fluid: {originalName: {regex: "/banja_180/"}}}) {
          nodes {
            fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        big:allImageSharp(filter: {fluid: {originalName: {regex: "/banja_180/"}}}) {
          nodes {
            fluid {
              originalImg
            }
          }
        }
        first: file(name: {eq: "1_banja_180 (1)"}) {
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
