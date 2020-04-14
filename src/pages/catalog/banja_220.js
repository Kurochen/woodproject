import React from "react"
import DomLayout from "../../components/DomLayout/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
    name: 'banja_220',
    title: "Баня 220",
    material: "Бревно 220",
    path: "/catalog/banja_220/",
    v: 23.75,
    sice: "4.3 x 10.3",
    description: "Баня с просторной комнатой отдыха и верандой",
    descriptionCard: "Тестовое описание",

}

function IndexPage() {
    const data = useStaticQuery(graphql`
    query {
        small:allImageSharp(filter: {fluid: {originalName: {regex: "/banja_220/"}}}) {
          nodes {
            fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        big:allImageSharp(filter: {fluid: {originalName: {regex: "/banja_220/"}}}) {
          nodes {
            fluid {
              originalImg
            }
          }
        }
        first: file(name: {eq: "1_banja_220 (1)"}) {
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
