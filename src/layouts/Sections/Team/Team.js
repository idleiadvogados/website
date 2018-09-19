import React from 'react'
import { InfoPhoto } from '../../InfoPhoto'
import { Mobile, Default } from '../../Responsive'
import styles from './Team.module.scss'

const Team = ({ members = [], title, subtitle, openModal }) => {
  const sortedMembersByPosition = members.sort(
    (a, b) => a.position - b.position
  )
  const evenMembers = sortedMembersByPosition.filter((member, i) => i % 2 === 0)
  const unevenMembers = sortedMembersByPosition.filter(
    (member, i) => i % 2 !== 0
  )
  const smallMembers = sortedMembersByPosition.filter(
    member => member.size === 'small'
  )
  const mediumMembers = sortedMembersByPosition.filter(
    member => member.size === 'medium'
  )
  const largeMembers = sortedMembersByPosition.filter(
    member => member.size === 'large'
  )
  const sizeSortedMembers = largeMembers
    .concat(mediumMembers)
    .concat(smallMembers)
  return (
    <div className={styles.teamContainer}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <Mobile>
        <div className={styles.photosContainer}>
          <div className={styles.photoColumn}>
            {sizeSortedMembers.map(member => (
              <InfoPhoto
                member={member}
                className={styles.photo}
                onClick={openModal}
              />
            ))}
          </div>
        </div>
      </Mobile>
      <Default>
        <div className={styles.photosContainer}>
          <div className={`${styles.photoColumn} ${styles.unevenColumn}`}>
            {unevenMembers.map(member => (
              <InfoPhoto
                member={member}
                size={member.size}
                className={styles.photo}
                onClick={openModal}
              />
            ))}
          </div>
          <div className={`${styles.photoColumn}`}>
            {evenMembers.map(member => (
              <InfoPhoto
                member={member}
                size={member.size}
                className={styles.photo}
                onClick={openModal}
              />
            ))}
          </div>
        </div>
      </Default>
    </div>
  )
}

export default Team
