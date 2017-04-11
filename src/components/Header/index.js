import React, { PropTypes, Component } from "react"
import { Link } from "phenomic"

import handleClickAway from '../../utils/handleClickAway'
import styles from "./index.css"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      didScroll: false,
      sideNavOpen: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  handleScroll(){
    // only handle scroll state if menu closed
    if (!this.state.sideNavOpen) {
      if( window.pageYOffset > 50 )
        this.setState({didScroll: true})
      else
        this.setState({didScroll: false})
    }
  }

  closeNav(e) {
      const toggleNode = this.refs.toggle
      const isOutsideClick = handleClickAway(toggleNode, e)
      if (toggleNode && isOutsideClick) {
        this.setState({
          sideNavOpen: false
        })
      }
    }
    handleClick() {
      this.setState({
        sideNavOpen: !this.state.sideNavOpen
      })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    document.body.addEventListener('click', this.closeNav)
  }

   componentWillUnmount(){
     window.removeEventListener('scroll', this.handleScroll);
     document.body.removeEventListener('click', this.closeNav)
  }

  render() {
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''

    return (
      <header className={ styles.header + (this.state.didScroll ? ' ' + styles.scrolled : '') }>
        <div className={ styles.logo }>
          <Link
            className={ styles.link }
            to={ "/" }
          >
            { "스타키 보청기 파주점" }
          </Link>
        </div>

        <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
          <div className={styles.ham}>
            <div className={`${styles.bar} ${openClass}`} />
          </div>
        </div>

        <nav className={ `${styles.nav} ${mobileNav}` }>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/about/" }
              >
                { "소개" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/centerphotos/" }
              >
                { "센터사진" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/events/" }
              >
                { "보청기" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/blog/" }
              >
                { "블로그" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/contact/" }
              >
                { "문의" }
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
