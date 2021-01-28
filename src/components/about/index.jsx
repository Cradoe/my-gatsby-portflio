import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Title, Text, SubTitle, Avatar } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ismail-obadimu.png" }) {
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
              <SubTitle> Software Developer</SubTitle>
            </div>
            <div>
              <Title> Hello, I’m Ismail Obadimu</Title>
              <Text>
                {" "}
                I'm a Software Developer, Developer Advocate{" "}
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
                {/* I prefer minimalistic & clean designs with strong user
                experience. */}
              </Text>
              <Text>
                Currently Acing things up as a software developer at{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.botsurance.ng/"
                >
                  <b className="text-primary lined-link">Botsurance</b>
                </a>{" "}
                - Using the power of technology to process genuine insurance
                cover for every Nigerians in 24hours.
              </Text>
              <ResumeButton href="files/resume.pdf" target="_blank">
                {" "}
                Download resume{" "}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
