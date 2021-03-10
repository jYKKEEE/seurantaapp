/* eslint-disable no-unused-vars */
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
  FloatingButton,
  ButtonAppContainer,
  ButtonContainer,
} from '../shared/button/Button';
import AnimalProfile from '../animalProfile';
import Settings from '../settings';

const App = () => {
  const [data, setData] = useState([]);
  const [notes, setNotes] = useState([]);
  const [animalLocations, setAnimalLocations] = useState([]);
  //global states
  const [states, setStates] = useState({ add: false, addButton: true });
  // states handling
  const handleQuickAddView = (bool) => {
    setStates((prevState) => ({ ...prevState, add: bool }));
  };
  const handleAddButton = (bool) => {
    setStates((prevState) => ({ ...prevState, addButton: bool }));
  };

  //// eläimet db - toiminnallisuus \\\
  const animalCollectionRef = useFirestore().collection('animals');
  const { data: animalCollection } = useFirestoreCollectionData(
    animalCollectionRef.orderBy('number'),
    {
      initialData: [],
      idField: 'id',
    }
  );

  useEffect(() => {
    setData(animalCollection);
    animalCollectionRef.get();
  }, [animalCollection]);

  const addToAnimals = (newData) => {
    animalCollectionRef.doc(newData.number).set(newData);
  };

  //// notes \\\\
  const noteCollectionRef = useFirestore().collection('notes');

  useEffect(() => {
    var notesList = [];
    noteCollectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notesList.push(doc.data().note);
      });
    });
    setNotes(notesList);
  }, []);

  const addToNotes = (newData) => {
    noteCollectionRef.doc(newData.note).set({ note: newData.note });
    setNotes(notes.concat(newData.note));
  };

  ////  Sijainnit \\\

  const locationsCollectionRef = useFirestore().collection('locations');

  useEffect(() => {
    var locationList = [];
    locationsCollectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        locationList.push(doc.data().location);
      });
    });
    setAnimalLocations(locationList);
  }, []);

  const addToAnimalLocations = (newData) => {
    locationsCollectionRef
      .doc(newData.newAnimalLocation)
      .set({ location: newData.newAnimalLocation });
    setAnimalLocations(animalLocations.concat(newData.newAnimalLocation));
  };

  return (
    <ButtonAppContainer>
      <Router>
        <div
          className='flex flex-col m-0 bg-gradient-to-tl from-red-500 via-gray-800 to-gray-600 h-screen w-full flex-auto'
          onDoubleClick={() => {
            //quickForm näkyy: piilota se. Nappi näkyy: piilota se. Mitään ei näy: näytä nappi.
            if (states.add) {
              handleQuickAddView(false);
            } else if (states.addButton) {
              handleAddButton(false);
            } else if (!states.addButton) {
              handleAddButton(true);
            }
          }}
        >
          <Navigation handleNotes={handleQuickAddView} />

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
          {states.addButton ? (
            states.add ? (
              <QuickForm
                notes={notes}
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
                      handleQuickAddView(true);
                    }}
                  >
                    +
                  </FloatingButton>
                </ButtonContainer>
              </div>
            )
          ) : (
            <></>
          )}
        </div>
      </Router>
    </ButtonAppContainer>
  );
};

export default App;
