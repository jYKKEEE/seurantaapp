import React, { useState } from 'react';

import Content from '../content';
import Header from '../navigation';

const App = () => {
  return (
    <div class='min-h-screen 100vh w-auto'>
      <Header />
      <Content>
        tähä jotai<br></br> ja jotai
      </Content>
    </div>
  );
};

export default App;
