import React, { Component } from 'react'
import { Button } from '../../Button'
import { Card } from '../../Card'
import CareersForm from './CareersForm'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './Careers.module.scss'

class Careers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCareersVisible: false,
    }
  }
  _handleClick = () => {
    this.setState({ isCareersVisible: true })
  }
  render() {
    const { title, subtitle, overlayText, teamPhoto } = this.props
    return (
      <div className={this.state.isCareersVisible ? styles.careersWrapper : ''}>
        <div
          className={`${
            this.state.isCareersVisible ? styles.careersSection : ''
          }`}
        >
          {this.state.isCareersVisible ? (
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionAppear={true}
              transitionEnterTimeout={5000}
              transitionLeaveTimeout={5000}
            >
              <Card
                key={1}
                className={styles.careers}
                overlayText={overlayText}
                center
                cardClassName={styles.cardHeight}
                cardContentClassName={styles.cardContent}
                teamPhoto={teamPhoto}
              >
                <CareersForm title={title} subtitle={subtitle} />
              </Card>
            </ReactCSSTransitionGroup>
          ) : null}
          {!this.state.isCareersVisible ? (
            <div
              className={`${!this.state.isCareersVisible ? styles.button : ''}`}
            >
              <Button
                buttonType="outlinedButton"
                text="Junte-se a nós"
                onClick={this._handleClick}
              />
            </div>
          ) : null}
        </div>
        <div className={styles.careersTexture} />
      </div>
    )
  }
}

export default Careers
