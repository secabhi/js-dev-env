import './index.css';

import number from 'numeral';

const courseval = number(1000).format('$0,0.00');
console.log(`I got amoumt of ${courseval} for my course . Yipee!`); //eslint-disable-line no-console
