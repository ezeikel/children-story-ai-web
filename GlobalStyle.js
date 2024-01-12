import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  :root {
    // color
    --color-coral: #FB7A4F;
    --color-eggshell: #F6F2ED;
    --color-ink: #2A3131;
    --color-ink-light: #576463;
    --color-purple: #54194F;
    --color-peach: #FFD4AC;
    --color-white: #FFFFFF;
    --color-text: #333333;


    // spacing
    --spacing-tiny: 4px;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 32px;
    --spacing-huge: 64px;
    --spacing-gargantuan: 128px;

    // font
    --default-font-size: 10px;
    --font-size-tiny: 1.4rem;
    --font-size-small: 1.6rem;
    --font-size-medium: 1.8rem;
    --font-size-large: 2rem;
    --font-size-huge: 2.2rem;

    --border-radius: 8px;
  }

  * {
    box-sizing: border-box;
    font-size: var(--default-font-size);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-primary);
    color: var(--color-black);
  }

  a {
    text-decoration: none;
    color: var(--color-ink);
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
`;
