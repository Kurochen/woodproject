import React from "react"
import DomLayout from "../../components/DomLayout/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
    name: 'dom_brus_135x200',
    title: "Дом из бруса",
    material: "Брус 135х200",
    path: "/catalog/dom_brus_135x200/",
    v: 47.15,
    sice: "5.7 x 8.6",
    description: <p>Двухэтажный жилой дом из бруса. г. Москва. <br />Тема строительства на ForumHouse - <span><a href="https://www.forumhouse.ru/threads/287579/" target="_blank" rel="alternate noopener noreferrer">ForumHouse </a></span><br /></p>,
    descriptionCard: "Тестовое описание",

}

function IndexPage() {
    const data = useStaticQuery(graphql`
    query {
        small:allImageSharp(filter: {fluid: {originalName: {regex: "/dom_brus_135x200/"}}}) {
          nodes {
            fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        big:allImageSharp(filter: {fluid: {originalName: {regex: "/dom_brus_135x200/"}}}) {
          nodes {
            fluid {
              originalImg
            }
          }
        }
        first: file(name: {eq: "1_dom_brus_135x200 (1)"}) {
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
