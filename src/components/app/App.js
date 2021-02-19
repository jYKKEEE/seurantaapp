import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Content from '../content';
import Events from '../events';

import Navigation from '../navigation';
import QuickForm from '../forms/QuickFrom';
import Info from '../Info';

import testData from '../../testData.js';
import { selects as testSelects } from '../../testData.js';
import {
  FloatingButton,
  ButtonAppContainer,
  ButtonContainer,
} from '../shared/button/Button';

const App = () => {
  const [data, setData] = useState(testData);
  // eslint-disable-next-line no-unused-vars
  const [selects, setSelect] = useState(testSelects);
  //form state
  const [newNote, setNewNote] = useState(false);
  const [number, setNumber] = useState(0);

  const addToAnimals = (newData) => {
    var edit = false; //aluksi eläintä ei ole tiedossa
    console.log(`tänään: ${new Date()}`);
    data.map((animal, index) => {
      //jos eläin löytyy jo listasta
      if (animal.number === newData.number) {
        edit = true;
        var newAnimal = animal[index];
        newAnimal.notes.push({ date: new Date(), note: newData.note });
        data.splice(index, 1);
        setData(data.concat(newAnimal));
      }
    });
    edit === false
      ? setData(
        data.concat({
          number: newData.number,
          name: '',
          race: '',
          where: '',
          notes: [{ date: new Date(), note: newData.note }],
        })
      )
      : setNumber(0);
  };

  const handleNotes = (bool) => {
    setNewNote(bool);
  };

  return (
    <ButtonAppContainer>
      <Router>
        <div
          className='flex flex-col m-0 bg-gradient-to-tl from-red-500 via-gray-900 to-gray-600 h-screen w-full flex-auto'
          onDoubleClick={() => {
            handleNotes(false);
          }}
        >
          <Navigation handleNotes={handleNotes} />

          <Content handleNotes={handleNotes}>
            <Route path='/' exact>
              <Info data={data} note={newNote} />
            </Route>

            <Route path='/tapahtumat' exact>
              <Events data={data} />
            </Route>
          </Content>

          {newNote ? (
            <QuickForm
              selects={selects}
              addToAnimals={addToAnimals}
              number={number}
            />
          ) : (
            <div className='flex justify-end pb-3'>
              <ButtonContainer>
                <FloatingButton
                  secondary
                  className='py-4 px-2'
                  onClick={() => {
                    handleNotes(true);
                  }}
                >
                  Lisää
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
