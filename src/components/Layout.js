import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let header = (
      <h3
        style={{
          fontFamily: 'Bad Script',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {location.pathname !== rootPath ? header : null}

        {children}
        <footer>
          Porque algumas coisas não são nomeáveis, nem sempre Aristóteles faz sentido
          <h5>Por Phelipe Wener</h5>
        </footer>
      </div>
    )
  }
}

export default Layout
