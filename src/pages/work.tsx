import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  container,
  image,
  content,
} from './work.module.css'
const WorkPage = () => {

  const sourceData = useStaticQuery(dataQuery)
  const data = sourceData.allWorkJson.edges
  return (
    <div>
      <h2 id="work">Work</h2>
      {
        data.map((work) => (
          <div className={container}>
            <div className={image}>
              { work.node.image && <GatsbyImage image={getImage(work.node.image)} alt="" /> }
            </div>
            <div className={content}>
              <h3>{work.node.title}</h3>
              <h4>{work.node.company}, {work.node.date}</h4>
              <p>{work.node.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
const dataQuery = graphql`
  query getWork {
    allWorkJson {
      edges {
        node {
          title
          company
          date
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
        }
      }
    }
  }
`
export const Head = () => <title>Oliver Limoyo: Work</title>
export default WorkPage