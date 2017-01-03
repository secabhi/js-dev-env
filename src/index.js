//import './index.css';

import numbers from 'numeral';

const courseval = numbers(1000).format('$0,0.00');
console.log(`I got amoumt of ${courseval} for my course . Yipee!`);
