import { css } from 'styled-components';

import MoniqaMediumHeadingWOFF from '@fonts/Moniqa-MediumHeading.woff';
import MoniqaMediumHeadingWOFF2 from '@fonts/Moniqa-MediumHeading.woff2';
import MoniqaMediumParagraphWOFF from '@fonts/Moniqa-MediumParagraph.woff';
import MoniqaMediumParagraphWOFF2 from '@fonts/Moniqa-MediumParagraph.woff2';
import NeueHaasGroteskDisplayTTF from '../fonts/NeueHaasDisplayLight.ttf';

const moniqaRegularWeights = {
  400: [MoniqaMediumParagraphWOFF, MoniqaMediumParagraphWOFF2],
  500: [MoniqaMediumHeadingWOFF, MoniqaMediumHeadingWOFF2],
};

const neueHaasGroteskWeights = {
  600: [NeueHaasGroteskDisplayTTF],
};

const moniqa = {
  name: 'Moniqa',
  normal: moniqaRegularWeights,
};

const neueHaasGrotesk = {
  name: 'neue-haas-grotesk-display',
  normal: neueHaasGroteskWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const ttf = formats[0];
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
            url(${ttf}) format('truetype');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const moniqaRegular = createFontFaces(moniqa);

const neueHaasGroteskDisplay = createFontFaces(neueHaasGrotesk);

const Fonts = css`
  ${moniqaRegular}
  ${neueHaasGroteskDisplay}
`;

export default Fonts;