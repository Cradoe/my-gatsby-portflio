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
                I'm a Software Developer, Tech Enthusiast, Developer Advocate{" "}
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
                Currently Acing things up as a software developer at{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.botsurance.ng/"
                >
                  <b className="text-primary lined-link">Botsurance</b>
                </a>{" "}
                - Using the power of technology to process genuine insurance
                cover for every Nigerian in 24hours.
              </Text>
              <ResumeButton href="https://flexidink.com" target="_blank">
                My Startup
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
