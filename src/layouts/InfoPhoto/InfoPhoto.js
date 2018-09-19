import React from 'react'
import styles from './InfoPhoto.module.scss'

const InfoPhoto = ({ member = {}, size, className, onClick = () => {} }) => {
  const photo = member.photo
    ? member.photo.replace('/assets/', '')
    : 'content/member1.jpg'
  return (
    <div
      className={`${styles.teamMember} ${className}`}
      onClick={() => onClick(member)}
    >
      <div className={styles.photoWrapper}>
        <div className={styles.overlay} />
        <div className={styles.plus}>
          <div className={styles.plusIconWrapper}>
            <div className={styles.plusIcon} />
          </div>
        </div>
        <img
          className={`${styles.photo} ${styles[size]}`}
          src={require(`!url!assets/${photo}`)}
        />
      </div>
      <div className={styles.name}>{member.name}</div>
      <div className={styles.role}>{member.role}</div>
    </div>
  )
}

export default InfoPhoto
