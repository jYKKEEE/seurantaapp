import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import 'firebase/firestore';

import Content from '../content';
import Sighting from '../sightings';
import Navigation from '../navigation';
import Info from '../Info';
import QuickForm from '../forms/QuickFrom';

//import testData from '../../testData.js';
import { selects as testSelects } from '../../testData.js';
import {
  FloatingButton,
  ButtonAppContainer,
  ButtonContainer,
} from '../shared/button/Button';
import AnimalProfile from '../animalProfile/AnimalProfile';

const App = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selects, setSelect] = useState(testSelects);
  //form state
  const [states, setStates] = useState({ edit: false, add: false });

  const animalCollectionRef = useFirestore().collection('animals');
  const { data: animalCollection } = useFirestoreCollectionData(
    animalCollectionRef.orderBy('notes'),
    {
      initialData: [],
      idField: 'id',
    }
  );

  useEffect(() => {
    setData(animalCollection);
  }, [animalCollection]);

  const addToAnimals = (newData) => {
    animalCollectionRef.doc(newData.number).set(newData);
  };

  const handleAdd = (bool) => {
    setStates((prevState) => ({ ...prevState, add: bool }));
    console.log(`add: ${bool}`);
  };

  return (
    <ButtonAppContainer>
      <Router>
        <div
          className='flex flex-col m-0 bg-gradient-to-tl from-red-500 via-gray-900 to-gray-600 h-screen w-full flex-auto'
          onDoubleClick={() => {
            handleAdd(false);
          }}
        >
          <Navigation handleNotes={handleAdd} />

          <Content>
            <Route path='/' exact>
              <Info data={data} add={states.add} />
            </Route>

            <Route path='/havainnot' exact>
              <Sighting data={data} />
            </Route>
            <Route path='/animal/:id' exact>
              <AnimalProfile
                data={data}
                addToAnimals={addToAnimals}
                selects={selects}
              />
            </Route>
            <Route path='/animal/profile' exact></Route>
          </Content>

          {states.add ? (
            <QuickForm
              selects={selects}
              addToAnimals={addToAnimals}
              data={data}
            />
          ) : (
            <div className='flex justify-end pb-3'>
              <ButtonContainer>
                <FloatingButton
                  float
                  className='py-4 px-2'
                  onClick={() => {
                    handleAdd(true);
                  }}
                >
                  +
                </FloatingButton>
              </ButtonContainer>
            </div>
          )}
        </div>
      </Router>
    </ButtonAppContainer>
  );
};

export default App;
