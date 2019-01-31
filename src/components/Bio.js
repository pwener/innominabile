import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

const phrases = [
  (<p>Escrito por <strong>alguém</strong> que não se leva a sério.</p>),
  (<p>Escrito por <strong>Mr. Nobody</strong>.</p>),
  (<p>Escrito por... Ah <strong>tanto faz...</strong></p>),
  (<p>Escrito por um heterônimo sem nome...</p>),
  (<p>Escrito por <strong>alguém</strong> que com certeza tem dificuldades em se definir.</p>),
];

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        return (
          <div
            style={{
              display: `flex`,
            }}
          >
            {phrases[Date.now() % phrases.length]}
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
