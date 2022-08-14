import React from 'react';
import {
  ResultsSection,
  Row,
  TopRow,
  Col,
  BigTitle,
  NormalText,
  StyledImage,
  TopImage,
  BottomImage,
  HalfRow,
  HalfCol,
} from './style';
import { Container, ParaText } from '@styles';

const Results = ({ data }) => {
  return (
    <ResultsSection>
      <Container>
        <TopRow>
          <BigTitle>Formative</BigTitle>
          <BigTitle>Years</BigTitle>
        </TopRow>
        <Row>
          <Col image>
            <TopImage data-scroll data-scroll-speed={2}>
              <StyledImage
                fluid={data.fyp_poster2.childImageSharp.fluid}
                alt="Propaganda from the Five Year Plan"
                imgStyle={{ objectFit: 'contain' }}
              />
            </TopImage>
            <BottomImage data-scroll data-scroll-speed={1}>
              <StyledImage
                fluid={data.fyp_poster3.childImageSharp.fluid}
                alt="Propaganda from the Five Year Plan"
                imgStyle={{ objectFit: 'contain' }}
              />
            </BottomImage>
          </Col>
          <Col>
            <NormalText>
              Mboya was educated at various Catholic mission schools. In 1942, he joined St. Mary's
              School Yala - a Catholic secondary school in Yala, located in Nyanza province where
              Mboya began his education in English and History.
            </NormalText>
          </Col>
        </Row>
        <HalfRow>
          <HalfCol>
            <ParaText number="03">
              In 1946, he attended the Holy Ghost College (later Mang'u High School), where he
              passed well enough to proceed to do his Cambridge School Certificate. In 1948, Mboya
              joined the Royal Sanitary Institute's Medical Training School for Sanitary Inspectors
              at Nairobi, qualifying as an inspector in 1950.
            </ParaText>
          </HalfCol>
          <HalfCol>
            <ParaText number="04">
              He also enrolled in a certificate course in economics at Efficiency Correspondence
              College of South Africa. In 1955, he received a scholarship from Britain's Trades
              Union Congress to attend Ruskin College, University of Oxford, where he studied
              industrial management.[5] After his graduation in 1956, he returned to Kenya and
              joined politics at a time when the British government was gaining control over the
              Kenya Land and Freedom Army Mau Mau uprising.
            </ParaText>
          </HalfCol>
        </HalfRow>
      </Container>
    </ResultsSection>
  );
};

export default Results;
