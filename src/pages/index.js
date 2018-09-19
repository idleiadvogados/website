import React, { Component } from 'react'
import { Home, Team, About, Careers, Contacts } from '../layouts/Sections'
import { Section } from '../layouts/Section'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import { Modal } from '../layouts/Modal'
import { Helmet } from 'react-helmet'
import { Mobile, Default, Tablet, Desktop } from '../layouts/Responsive'
import styles from './index.module.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      member: {},
    }
  }
  _openModal = member => {
    this.setState({ isModalOpen: true, member: member })
  }

  _closeModal = member => {
    this.setState({ isModalOpen: false, member: {} })
  }
  render() {
    const { data } = this.props
    const membersPattern = new RegExp('members')
    const contactsPattern = new RegExp('contacts')
    const aboutPattern = new RegExp('about')
    const careersPattern = new RegExp('careers')
    const members =
      data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .filter(node => membersPattern.test(node.id))
        .map(node => node.frontmatter) || []
    const about =
      data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .filter(node => aboutPattern.test(node.id))
        .map(node => node.frontmatter)[0] || {}
    const careers =
      data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .filter(node => careersPattern.test(node.id))
        .map(node => node.frontmatter)[0] || {}
    const contacts =
      data.allMarkdownRemark.edges
        .map(edge => edge.node)
        .filter(node => contactsPattern.test(node.id))
        .map(node => node.frontmatter)[0] || {}
    return (
      <div className={styles.body}>
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* SEO */}
          <meta
            name="image"
            content={'https://idlei.netlify.com/static/team.9d14beef.jpg'}
          />
          <meta property="og:title" content="IDLei" />>
          <meta property="og:description" content="Sociedade de advogados" />
          <meta
            property="og:image"
            content="https://idlei.netlify.com/static/team.9d14beef.jpg"
          />
          <meta property="og:url" content="http://idlei.netlify.com" />
          <meta property="twitter:title" content="IDLei" />
          <meta
            property="twitter:description"
            content="Sociedade de advogados"
          />
          <meta
            property="twitter:image"
            content="https://idlei.netlify.com/static/team.9d14beef.jpg"
          />
          <meta property="twitter:url" content="http://idlei.netlify.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>IDLei - advogados</title>
          <meta
            name="description"
            content="A advocacia, um instrumento de civilização, de pacificação e de regulação. A advocacia, um trabalho de risco que exige cultura, abnegação e respeito."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,700|Sintony:400,700"
            rel="stylesheet"
          />
          <style type="text/css">
            {`
        .uploadcare--widget__text {
          font-family: 'Sintony', 'sans-serif';
        }
        .uploadcare--widget__button {
          border-radius: 2px;
        }
        .uploadcare--link {
          color: #142139;
        }
        .uploadcare--link:hover {
            text-decoration: underline;
            color: #bd2e2b;
        }
        .uploadcare--widget__file-size {
          color: rgb(161, 166, 176);
        }
        .uploadcare--widget {
          font-family: 'Sintony', 'sans-serif';
          padding-top: 30px !important;
        }
        .uploadcare--widget_status_loaded .uploadcare--widget_status {
          display: inline-block !important;
        }
        .uploadcare--progress_type_canvas {
          color: #bd2e2b;
          border-color: #a1a6b0;
        }
        .uploadcare--widget__button_type_open {
          font-family: 'Sintony', 'sans-serif';
          letter-spacing: 0.1px;
          border-bottom: 1px solid black;
          line-height: 1;
          background-color: transparent;
          border-radius: 0px;
          color: black;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 2px;
          cursor: pointer;
        }
        .uploadcare--widget__button_type_open:focus {
          outline: 0;
        }
        .uploadcare--widget__button_type_open:hover {
          font-family: 'Sintony', 'sans-serif';
          letter-spacing: 0.1px;
          border-bottom: 1px solid black;
          line-height: 1;
          background-color: transparent;
          border-radius: 0px;
          color: black;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 2px;
          cursor: pointer;
        }
        .fade-appear {
          opacity: 0.01;
        }
        .fade-appear.fade-appear-active {
          opacity: 1;
          transition: opacity 250ms ease-in;
        }
        .fade-leave {
          opacity: 1;
        }
        .fade-leave.fade-leave-active {
          opacity: 0.01;
          transition: opacity 250ms ease-in;
        }
        .uploadcare--widget__button_type_open {
          background: none !important;
        }`}
          </style>
          <script>
            UPLOADCARE_LOCALE = "pt"; UPLOADCARE_TABS = "file url gdrive
            dropbox"; UPLOADCARE_PUBLIC_KEY = "b913b515c1cf44f45884";
          </script>
          <script
            charset="utf-8"
            src="//ucarecdn.com/libs/widget/3.5.1/uploadcare.full.min.js"
          />
          <script>{`
        UPLOADCARE_LOCALE_TRANSLATIONS = {
          buttons: {
              choose: {
                  files: {
                      one: 'Anexar documentos',
                      other: 'Anexar documentos'
                  },
                  images: {
                      one: 'Anexar cv',
                      other: 'Anexar cv'
                  }
              }
          }
      };`}</script>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Helmet>
        <Modal
          isOpen={this.state.isModalOpen}
          closeModal={this._closeModal}
          member={this.state.member}
        />
        <Header />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <Section className={styles.homeSection} id="home" fullWidth>
          <Home
            subtitle={
              <div>
                <span>A </span>
                <span className={styles.darkText}>advocacia</span>
                <span>
                  , um instrumento de civilização, de pacificação e de
                  regulação.
                </span>
                <div className={styles.homeTitle2}>
                  <span>A </span>
                  <span className={styles.darkText}>advocacia</span>
                  <span>
                    , um trabalho de risco que exige cultura, abnegação e
                    respeito.
                  </span>
                </div>
              </div>
            }
          />
        </Section>
        <Section className={styles.aboutSection} id="about">
          <About
            overlayText={
              <div>
                <span>{`“${about.citation}”`}</span>
                <Mobile>
                  <div className={styles.citationAuthor}>{about.author}</div>
                </Mobile>
                <Tablet>
                  <div className={styles.citationAuthor}>{about.author}</div>
                </Tablet>
                <Desktop>
                  <span className={styles.citationAuthor}>{about.author}</span>
                </Desktop>
              </div>
            }
            title={about.title}
            text={about.description}
          />
        </Section>
        <Section id="team">
          <Team
            title="A nossa equipa"
            subtitle={
              <div>
                <div>
                  <div>Prestamos serviços honrados.</div>
                  <div>Procuramos fazê-los perfeitos.</div>
                </div>
              </div>
            }
            openModal={this._openModal}
            members={members}
          />
        </Section>
        <Section className={styles.careers} id="careers">
          <Careers
            title="Junte-se a nós"
            subtitle="Venha fazer parte da equipa"
            id="careers"
            teamPhoto={careers.photo}
          />
        </Section>
        <Section className={styles.contacts} id="contacts">
          <Contacts
            title="Contacte-nos"
            phone={contacts.phone}
            fax={contacts.fax}
            address={contacts.address}
            officePhoto={contacts.photo}
            link={contacts.link}
          />
        </Section>
        <Footer />
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            name
            photo
            role
            description
            lawyerEmail
            size
            position
            citation
            author
            phone
            fax
            address
            link
          }
        }
      }
    }
  }
`

export default IndexPage
