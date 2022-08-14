/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AboutSection, Row, Col } from './style';
import { StyledImage, Container, ImageAnim, ParaText } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  let tl = new TimelineLite();
  let aboutSection = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    tl.to(image, {
      scrollTrigger: {
        trigger: aboutSection,
        pin: true,
        scrub: true,
        start: 'center center',
        end: 'bottom top',
        scroller: '#___gatsby',
      },
      scaleY: 0,
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
  }, [tl]);

  return (
    <AboutSection>
      <Container>
        <Row ref={el => (aboutSection = el)}>
          <Col>
            <ImageAnim ref={el => (image = el)} />
            <StyledImage
              fluid={data.fyp_poster1.childImageSharp.fluid}
              alt="Propaganda from the Five Year Plan"
              style={{ position: 'absolute' }}
            />
          </Col>
          <Col>
            <ParaText number="01">
              His parents were Leonardus Ndiege from the Suba ethnic group of Kenya from Rusinga
              Island and Marcella Onyango from the Luo ethnic group of Kenya, both of whom were
              low-income sisal cutters working on the colonial farm of Sir William Northrup
              McMillan, at today's Juja Farm Area.
            </ParaText>
            <ParaText number="02">
              Eventually Leonard and Marcella had seven children, five sons and two daughters. When
              Mboya was 9 years old, his father sent him to a mission school in Kamba region.
            </ParaText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
