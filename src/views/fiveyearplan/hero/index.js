/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  HeroWrapper,
  BigTitle,
  ColItem,
  SubTitle,
  NumberWrapper,
  ParaWrapper,
  NormalText,
  AboutText,
  SplitWrapper,
  CaptionText,
} from './style';
import { StyledImage, SectionNumber, Container, Overflow } from '@styles';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
  let tl = new TimelineLite();
  let heroSection = useRef(null);
  let titleText = useRef([]);

  useEffect(() => {
    titleText.current.forEach(el => {
      tl.from(el, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top center',
          end: 'center center',
          toggleActions: 'play none none none',
          scroller: '#___gatsby',
          scrub: true,
        },
        yPercent: -100,
      });
    });

    ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
  }, [tl]);

  return (
    <Container>
      <NumberWrapper data-scroll data-scroll-speed={1}>
        <SectionNumber>1</SectionNumber>
      </NumberWrapper>
      <HeroWrapper ref={el => (heroSection = el)}>
        <ColItem>
          <BigTitle>
            <Overflow>
              <div ref={el => (titleText.current[0] = el)}>The</div>
            </Overflow>
            <Overflow>
              <div ref={el => (titleText.current[1] = el)}>Origin</div>
            </Overflow>
            <Overflow>
              <div ref={el => (titleText.current[2] = el)}>Story</div>
            </Overflow>
          </BigTitle>
          <Overflow>
            <SubTitle ref={el => (titleText.current[3] = el)}>15th August, 1930</SubTitle>
          </Overflow>
        </ColItem>
        <ColItem image>
          <StyledImage
            data-scroll
            data-scroll-speed={-1}
            fluid={data.fyp_people.childImageSharp.fluid}
            alt="People during the Five Year Plan"
            style={{ position: 'absolute' }}
          />
        </ColItem>
      </HeroWrapper>
      <AboutText>
        <SplitWrapper>
          <ParaWrapper top>
            <CaptionText>Lorem ipsum dolor sit amet,</CaptionText>
            <CaptionText>consectetur adipiscing elit,</CaptionText>
            <CaptionText>sed do eiusmod tempor.</CaptionText>
          </ParaWrapper>
          <ParaWrapper top>
            <NormalText>
              Tom Mboya, in full Thomas Joseph Odhiambo Mboya, was born on August 15, 1930
            </NormalText>
          </ParaWrapper>
        </SplitWrapper>
        <ParaWrapper>
          <NormalText>
            in Kilimambogo, near Thika town, Kenya on a sisal plantation estate.
          </NormalText>
        </ParaWrapper>
      </AboutText>
    </Container>
  );
};

export default Hero;
