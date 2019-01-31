import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const downLimit = 0.35;

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      frame: 1,
      opacity: 1,
      counter: 0,
    }
    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount() {
    this.timeEvt = setInterval(this.changeBackground, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timeEvt);
  }

  changeBackground() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
      opacity: ((Math.sin(prevState.counter) + 3) / 6),
      frame: prevState.opacity <= downLimit ? (prevState.frame + 1) % 3 : prevState.frame,
    }));
  }

  render() {
    const { location, title, children } = this.props

    const { frame, opacity } = this.state;

    console.info(opacity);

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

    const indexFooter = (
      <footer>
        Porque algumas coisas não são nomeáveis... Se quer expressáveis, então desculpa.
      </footer>
    );

    return (
      <div>
        <div
          style={{
            backgroundImage: `url(../static/images/quadro${frame}.png)`,
            opacity: opacity,
            position: 'fixed',
            height: '100vh',
            width: '100%',
            zIndex: -1,
          }}
        >
        </div>
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

          {location.pathname === rootPath ? indexFooter : null}
        </div>
      </div>
    )
  }
}

export default Layout
