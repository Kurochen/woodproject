import React from "react"
import DomLayout from "../../components/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
    title: "Дом 220",
    material: "бревно 220",
    path: "/catalog/dom_brevno_220/",
    v: 65,
    description: "Things about https://yadi.sk/d/vMZg19jGpiHag the choropleth.",
}

function IndexPage() {
    const data = useStaticQuery(graphql`
    query {
        small:allImageSharp(filter: {fluid: {originalName: {regex: "/dom_brevno_220/"}}}) {
          nodes {
            fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        big:allImageSharp(filter: {fluid: {originalName: {regex: "/dom_brevno_220/"}}}) {
          nodes {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        < DomLayout
            imgSmall={data.small.nodes.length}
            imgBig={data.big.nodes}
            title={frontmatter.title}
            material={frontmatter.material}
            v={frontmatter.v}
            description={frontmatter.description}
        />

    )
}

export default IndexPage
