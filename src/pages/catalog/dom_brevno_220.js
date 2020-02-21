import React from "react"
import DomLayout from "../../components/DomLayout/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
  name: 'dom_brevno_220',
  title: "Дом 220",
  material: "Бревно 220",
  path: "/catalog/dom_brevno_220/",
  v: 65,
  sice: "8.4 x 7.7",
  description: <p>Дом с оптимальной планировкой, позволящей свести к минимуму отход
    бревна <br /> <a href="https://yadi.sk/d/vMZg19jGpiHag" target="_blank" rel="noopener noreferrer">
      Пример состава документации.</a> Часть листов отсутствует, т.к.проект авторский.</p>,
  descriptionCard: "Тестовое описание",

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
        first: file(name: {eq: "1_dom_brevno_220 (1)"}) {
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
