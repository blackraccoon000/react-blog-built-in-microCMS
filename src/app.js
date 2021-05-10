import React from 'react';
import ReactDOM from 'react-dom';
import IconRac from './components/L1_Atoms/IconRac';
import IconGitOct from './components/L1_Atoms/IconGitOct';
import IconQiita from './components/L1_Atoms/IconQiita';
import IconTwitter from './components/L1_Atoms/IconTwitter';
import IconYoutube from './components/L1_Atoms/IconYoutube';
import FooterIcons from './components/L2_Molecules/FooterIcons';
import FooterItems from './components/L2_Molecules/FooterItems';
import FooterContainer from './components/L3_Organisms/FooterContainer';

const jsx = (
  <div>
    <h1>Hello World</h1>
    <IconRac />
    {/* <IconGitOct />
    <IconQiita />
    <IconTwitter />
    <IconYoutube /> */}
    {/* <FooterIcons />
    <FooterItems /> */}
    {/* <FooterContainer /> */}
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
