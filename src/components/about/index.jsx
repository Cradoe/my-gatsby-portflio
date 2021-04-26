import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Title, Text, Avatar } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ismail-obadimu.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="user photo"
              />
            </div>
            <div>
              <Title> Hello, I’m Ismail Obadimu</Title>
              <Text>
                {" "}
                I'm a Software Developer, Techpreneur, Developer Advocate{" "}
                <small>(Andela Nigeria, DevC Lagos, &amp; Programas Hub)</small>
                , and Founder of{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://flexidink.com"
                >
                  <b className="text-primary lined-link">Flexidink</b>
                </a>
                .
              </Text>
              <Text>
                I started my programming career at the age of 13, would spend
                most hours of the day trying to figure out the stuff behind
                those stunning websites, using my Tecno T381. And ever since
                then, I'd like to make the web a better place.
              </Text>
              <Text>
                Hopefully we cross paths in the real world someday and we can
                make it a better place together.
              </Text>
              <ResumeButton href="ismail-obadimu-cv.pdf" target="_blank">
                My Resume
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
