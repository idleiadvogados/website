import React from 'react'
import styles from './Card.module.scss'
import { Container } from '../Layout/Container'
import { Mobile, Tablet, Desktop } from '../Responsive'

const Card = ({
  children,
  overlayText,
  center,
  className,
  isOverlayUp,
  isSmallCard,
  sectionTitle,
  cardClassName,
  cardContentClassName,
  teamPhoto,
}) => {
  const photo = teamPhoto ? teamPhoto.replace('/assets/', '') : 'team.jpg'
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      <div
        className={`${styles.card} ${
          center ? styles.centerCard : styles.endCard
        } ${isSmallCard ? styles.smallCard : ''} ${cardClassName}`}
      >
        <Mobile>
          <div>
            {overlayText ? (
              <div className={styles.overlayText}>{overlayText}</div>
            ) : null}
          </div>
        </Mobile>
        <Tablet>
          <div className={styles.tabletCard}>
            {overlayText ? (
              <div className={styles.overlayText}>{overlayText}</div>
            ) : null}
          </div>
        </Tablet>
        <Desktop>
          <div>
            {overlayText ? (
              <div
                className={`${styles.overlayText} ${
                  isOverlayUp ? styles.overlayUp : styles.overlayMedium
                }`}
              >
                {overlayText}
              </div>
            ) : null}
            {teamPhoto ? (
              <img
                className={styles.teamPhoto}
                src={require(`!url!assets/${photo}`)}
              />
            ) : null}
          </div>
        </Desktop>
        <div
          className={`${styles.cardContent} ${
            styles.cardContentMedium
          } ${cardContentClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
