import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  image,
  content,
  authors,
  journal,
  links,
  note,
} from './research.module.css'

const ResearchPage = () => {
  const sourceData = useStaticQuery(dataQuery)
  const data = sourceData.allResearchJson.edges

  return (
    <div>
      <h2 id="research">Selected Publications</h2>
      {
        data.map((research) => (
          <div className={container}>
            <div className={image}>
              { research.node.image && <img src={require(`../images/research/${research.node.image}`).default} alt="" />}
            </div>
            <div className={content}>
              <h3>{research.node.title}</h3>
              <p className={authors} dangerouslySetInnerHTML={{__html: research.node.authors}} />
              <p className={journal}>{research.node.journal}, {research.node.date}</p>
                {research.node.links && 
                  (<p className={links}> 
                    { research.node.links.map((link) => <span><a href={link.url} target="_blank">{link.name}</a></span>)}
                  </p>
                  )}
              {research.node.description && <p>{research.node.description}</p>}
              {research.node.note && <p className={note}>{research.node.note}</p>}
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
          note
          image
          links {
            name
            url
          }
        }
      }
    }
  }
`
export const Head = () => <title>Oliver Limoyo: Research</title>
export default ResearchPage