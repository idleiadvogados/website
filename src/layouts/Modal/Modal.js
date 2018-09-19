import React from 'react'
import ScrollLock from 'react-scrolllock'
import { Icon } from '../Icon'
import { Mobile, Default, Desktop } from '../Responsive'
import Scroll from 'react-awesome-scroll'
import styles from './Modal.module.scss'

var scrollArea = null

const Modal = ({ isOpen, closeModal, member = {} }) => {
  let photo = ''
  if (member.photo) {
    photo = member.photo.replace('/assets/', '')
  }
  const getScrollArea = ref => {
    scrollArea = ref
  }
  return (
    <div>
      {isOpen ? (
        <div className={styles.modalContainer}>
          <div className={`${styles.modalOverlay} ${styles.effect}`} />
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Icon
                onClick={closeModal}
                type="close"
                className={styles.close}
              />
              <div className={styles.header}>
                <div className={styles.title}>{member.name}</div>
                <div className={styles.subtitle}>{member.role}</div>
              </div>
              <Mobile>
                <div className={styles.contentWrapper}>
                  <div className={styles.content} innerRef={getScrollArea}>
                    <div className={styles.rightModal}>
                      <img
                        src={require(`!url!assets/${photo}`)}
                        className={styles.photo}
                      />
                      <div className={styles.photoInfo}>
                        <div>-</div>
                        {/* title used as email*/}
                        {member.email ? <div>{member.email}</div> : null}
                        {member.lawyerEmail ? (
                          <div>{member.lawyerEmail}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className={styles.leftModal}>
                      <p>{member.description + '\n\n '}</p>
                    </div>
                  </div>
                </div>
              </Mobile>
              <Default>
                <div className={styles.content}>
                  <div className={styles.leftModal}>
                    <Scroll scrollClassName={styles.scrollBar}>
                      {member.description}
                    </Scroll>
                  </div>
                  <div className={styles.rightModal}>
                    <img
                      src={require(`!url!assets/${photo}`)}
                      className={styles.photo}
                    />
                    <div className={styles.photoInfo}>
                      {/* title used as email*/}
                      {member.title ? <div>{member.title}</div> : null}
                      {member.lawyerEmail ? (
                        <div>{member.lawyerEmail}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Default>
            </div>
          </div>
        </div>
      ) : null}
      <Desktop>{isOpen ? <ScrollLock /> : null}</Desktop>
    </div>
  )
}

export default Modal
