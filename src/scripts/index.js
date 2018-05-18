'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';
import profilePhoto from '../images/3C354C47-02B9-4D85-8503-7DC4FA015E36.png';

var profileImg = document.getElementById('profile-photo');
profileImg.src = profilePhoto;
