import config from './config';
import defaultTheme from './themes/default';

export default { default: defaultTheme }[config.theme];
