import 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import theme from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    mobile: string;
    laptop: string;
  }
}
