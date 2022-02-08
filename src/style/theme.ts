import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '360px',
  laptop: '1200px',
};

const theme: DefaultTheme = {
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(min-width: ${size.mobile})`,
};

export default theme;
