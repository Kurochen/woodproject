import React from "react"
import DomLayout from "../../components/DomLayout/DomLayout"
import { useStaticQuery, graphql } from "gatsby"


export const frontmatter = {
  name: 'dom_s_plosk_kr',
  title: "Дом с плоской крышей",
  material: "Брус 180х150",
  path: "/catalog/dom_s_plosk_kr/",
  v: 67,
  sice: "10 x 8.2",
  description: <p>Двухэтажный жилой дом из бруса. Толщина наружных стен брус 180х150 + утепление 100мм. Толщина внутренних стен 140х150 мм.<br />Скачать проект - <span><a href="https://yadi.sk/d/YRaoyD6qekdsP" target="_blank" rel="alternate noopener noreferrer">Яндекс.Диск <br /></a></span><span>Посмотреть модель -</span><span > <a href="http://a360.co/2id94QW" target="_blank" rel="alternate noopener noreferrer">Онлайн 3D</a><br /></span></p>,
  descriptionCard: "Тестовое описание",

}

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
        small:allImageSharp(filter: {fluid: {originalName: {regex: "/dom_s_plosk_kr/"}}}) {
          nodes {
            fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        big:allImageSharp(filter: {fluid: {originalName: {regex: "/dom_s_plosk_kr/"}}}) {
          nodes {
            fluid {
              originalImg
            }
          }
        }
        first: file(name: {eq: "1_dom_s_plosk_kr (1)"}) {
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
