import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import 'firebase/firestore';

import Content from '../content';
import Notes from '../notes';
import Navigation from '../navigation';
import Info from '../Info';
import QuickForm from '../forms/QuickFrom';

import {
  notes as notesList,
  animalLocations as locations,
} from '../../testData.js';
import {
  FloatingButton,
  ButtonAppContainer,
  ButtonContainer,
} from '../shared/button/Button';
import AnimalProfile from '../animalProfile/AnimalProfile';
import Settings from '../settings';

const App = () => {
  const [data, setData] = useState([]);
  const [notes, setNotes] = useState(notesList);
  // eslint-disable-next-line no-unused-vars
  const [animalLocations, setAnimalLocations] = useState(locations);
  //form state
  const [states, setStates] = useState({ add: false });

  //eläimet db - toiminnallisuus
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

  const noteCollectionRef = useFirestore().collection('notes');
  const { note: noteCollection } = useFirestoreCollectionData(
    noteCollectionRef.orderBy('notes'),
    {
      initialData: [],
    }
  );
  useEffect(() => {
    //setData(noteCollection);
  }, [noteCollection]);

  const addToNotes = (newData) => {
    setNotes(notes.concat(newData.note));
  };
  const addToAnimalLocations = (newData) => {
    setAnimalLocations(animalLocations.concat(newData.animalLocation));
  };

  const handleAdd = (bool) => {
    setStates((prevState) => ({ ...prevState, add: bool }));
  };
  console.log('mitäää : ' + animalLocations[1]);
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
              <Info data={data} add={states.add} states={states} />
            </Route>
            <Route path='/havainnot' exact>
              <Notes data={data} add={states.add} />
            </Route>
            <Route path='/animal/:id' exact>
              <AnimalProfile
                data={data}
                addToAnimals={addToAnimals}
                notes={notes}
                animalLocations={animalLocations}
              />
            </Route>
            <Route path='/animal/profile' exact></Route>
            <Route path='/settings'>
              <Settings
                notes={notes}
                addToNotes={addToNotes}
                animalLocations={animalLocations}
                addToAnimalLocations={addToAnimalLocations}
              />
            </Route>
          </Content>

          {states.add ? (
            <QuickForm notes={notes} addToAnimals={addToAnimals} data={data} />
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
