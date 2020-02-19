import React from "react"
import DomLayout from "../../components/DomLayout/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
  name: 'dom_brevno_220',
  title: "Дом 220",
  material: "Бревно 220",
  path: "/catalog/dom_brevno_220/",
  v: 65,
  sice: "6x6",
  description: <a href="http://htmlbook.ru/example/knob.html">
    Абсолютная ссылка
    </a>,
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
              originalImg
            }
          }
        }
        first: file(name: {eq: "dom_brevno_220 (1)"}) {
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
      title={frontmatter.title}
      material={frontmatter.material}
      v={frontmatter.v}
    />

  )
}

export default IndexPage
