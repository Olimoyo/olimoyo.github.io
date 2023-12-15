import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import {
  container,
  image,
  content,
  authors,
  journal,
  links,
} from './research.module.css'

const ResearchPage = () => {
  const sourceData = useStaticQuery(dataQuery)
  const data = sourceData.allResearchJson.edges

  return (
    <div>
      <h2 id="research">Research</h2>
      {
        data.map((research) => (
          <div className={container}>
            <div className={image}>
              { research.node.image && <GatsbyImage image={getImage(research.node.image)} alt="" />}
              { research.node.gif && <img src={require(`../images/research/${research.node.gif}`).default } /> }
            </div>
            <div className={content}>
            <h3>{research.node.title}</h3>
            <p className={authors}>{research.node.authors}</p>
            <p className={journal}>{research.node.journal}, {research.node.date}</p>
              {research.node.links && 
                (<p className={links}> 
                  { research.node.links.map((link) => <span><a href={link.url} target="_blank">{link.name}</a></span>)}
                </p>
                )}
            {research.node.description && <p>{research.node.description}</p>}
            </div>
          </div>
        ))
      }
    </div>
  )
}
const dataQuery = graphql`
  query getResearch {
    allResearchJson {
      edges {
        node {
          title
          authors
          journal
          date
          description
          gif
          links {
            name
            url
          }
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
export const Head = () => <title>Oliver Limoyo: Research</title>
export default ResearchPage