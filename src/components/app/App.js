import React, { useState } from 'react';
import Button from '../button';

import Content from '../content';
import Input from '../input/Input';
import Header from '../navigation';

import testData from '../../testData.js';
import Info from '../info/Info';

const App = () => {
  const [animals, setAnimals] = useState(testData);

  return (
    <div class='flex flex-col m-0 bg-gradient-to-tl from-red-500 via-gray-900 to-gray-600 h-screen w-full flex-auto'>
      <Header />
      <Input />
      <Content>
        <Info animals={animals} />
      </Content>
      <div className='flex items-center justify-center pb-6'>
        <Button primary>Lisää</Button>
      </div>
    </div>
  );
};

export default App;
