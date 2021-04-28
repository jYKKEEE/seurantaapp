/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';

import Content from '../content';

import AnimalProfile from '../animalProfile';
import Info from '../Info';
import Notes from '../notes';
import Notifications from '../shared/notifications/Notifications';
import Navigation from '../navigation';
import Settings from '../settings';
import QuickForm from '../forms/QuickFrom';

import {
  FloatingButton,
  ButtonAppContainer,
  ButtonContainer,
} from '../shared/button/Button';
import { useSwipeable } from 'react-swipeable';

const App = () => {
  const [data, setData] = useState([]);
  const [notes, setNotes] = useState([]);
  const [groups, setGroups] = useState([]);

  ///Swaippaus\\\
  const swipeAction = useSwipeable({
    onSwipedLeft: (e) => {
      swipePages(1);
    },
    onSwipedRight: (e) => {
      swipePages(-1);
    },
  });

  const [states, setStates] = useState({
    add: false,
    addButton: true,
    page: 0,
    filter: 99999,
  });
  // state handling
  const handleFilter = () => {
    if (states.filter === 99999) {
      setStates((prevState) => ({ ...prevState, filter: 0 }));
    } else if (states.filter + 1 === groups.length) {
      setStates((prevState) => ({
        ...prevState,
        filter: 99999,
      }));
    } else {
      setStates((prevState) => ({
        ...prevState,
        filter: prevState.filter + 1,
      }));
    }
  };
  const handleQuickAddView = (bool) => {
    setStates((prevState) => ({ ...prevState, add: bool }));
  };
  const handleAddButton = (bool) => {
    setStates((prevState) => ({ ...prevState, addButton: bool }));
  };
  const handlePage = (int) => {
    setStates((prevState) => ({ ...prevState, page: int }));
  };
  const swipePages = (int) => {
    setStates((prevState) => ({
      ...prevState,
      page:
        prevState.page + int < 1
          ? 0
          : prevState.page + int > 2
          ? 3
          : prevState.page + int,
    }));
  };

  //notifications
  const [notification, setNotification] = useState({
    text: '',
    bgcolor: '',
  });
  //notifications msg
  const handleNotification = (message, bgcolor) => {
    setNotification({ text: message, bgcolor: bgcolor });
    setTimeout(() => {
      setNotification({ text: '', bgcolor: '' });
    }, 4000);
  };

  const user = useUser();

  //// eläimet db - toiminnallisuus \\\
  const animalCollectionRef = useFirestore()
    .collection('user')
    .doc(user.data.uid)
    .collection('animals');
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
  const deleteAnimal = (number) => {
    var ask = confirm('Poistetaanko eläin ' + number);
    if (ask) {
      animalCollectionRef.doc(number).delete();
      handleNotification(`${number} onnistuneesti poistettu.`, 'bg-green-500');
      return true;
    } else {
      handleNotification('Poisto peruutettu', 'bg-green-500');
      return false;
    }
  };

  //// notes \\\\
  const noteCollectionRef = useFirestore()
    .collection('user')
    .doc(user.data.uid)
    .collection('notes');
  const { data: noteCollection } = useFirestoreCollectionData(
    noteCollectionRef.orderBy('note'),
    {
      initialData: [],
      idField: 'id',
    }
  );
  useEffect(() => {
    var notesList = [];
    noteCollectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notesList.push(doc.data().note);
      });
    });
    setNotes(notesList);
  }, [noteCollection]);

  const addToNotes = (newData) => {
    noteCollectionRef.doc(newData.note).set({ note: newData.note });
    setNotes(notes.concat(newData.note));
    handleNotification(
      `Valinta '${newData.note}' lisätty listaan`,
      'bg-green-500'
    );
  };
  const deleteNote = (note) => {
    var ask = confirm('VAROITUS!!\nPoistetaanko havainto ' + note);
    if (ask) {
      noteCollectionRef.doc(note).delete();
      handleNotification(
        `Valinta '${note}' onnistuneesti poistettu.`,
        'bg-green-500'
      );
    } else {
      handleNotification('Poisto peruutettu', 'bg-green-500');
    }
  };

  ////  Sijainnit \\\

  const groupsCollectionRef = useFirestore()
    .collection('user')
    .doc(user.data.uid)
    .collection('groups');
  const { data: groupsCollection } = useFirestoreCollectionData(
    groupsCollectionRef.orderBy('groups'),
    {
      initialData: [],
      idField: 'id',
    }
  );
  useEffect(() => {
    var groupList = [];
    groupsCollectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        groupList.push(doc.data().group);
      });
    });
    setGroups(groupList);
  }, [groupsCollection]);

  const addToGroups = (newData) => {
    groupsCollectionRef.doc(newData.newGroup).set({ group: newData.newGroup });
    setGroups(groups.concat(newData.newGroup));
    handleNotification(
      `Valinta '${newData.newGroup}' lisätty sijainnit listaan`,
      'bg-green-500'
    );
  };

  const deleteGroup = (group) => {
    var ask = confirm(
      'VAROITUS!!!\nHaluatko varmasti poistaa sijainnin: ' +
        group +
        '\nPoiston jälkeen et enää voi lajitella eläimiä sijainnin: ' +
        group +
        ' perusteella.'
    );
    if (ask) {
      groupsCollectionRef.doc(group).delete();
      handleNotification(
        `Sijainti ${group} onnistuneesti poistettu.`,
        'bg-green-500'
      );
    } else {
      handleNotification('Poisto peruutettu', 'bg-green-500');
    }
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
          <Navigation handlePage={handlePage} page={states.page} />
          <Content swipe={swipeAction} page={states.page}>
            <Notifications
              text={notification.text}
              bgcolor={notification.bgcolor}
              handleNotification={handleNotification}
            />
            <Route path='/' exact>
              <Info
                data={data}
                states={states}
                handleFilter={handleFilter}
                groups={groups}
              />
            </Route>
            <Route path='/notes' exact>
              <Notes
                data={data}
                states={states}
                handleFilter={handleFilter}
                groups={groups}
              />
            </Route>
            <Route path='/animal/:id' exact>
              <AnimalProfile
                data={data}
                addToAnimals={addToAnimals}
                deleteAnimal={deleteAnimal}
                handleNotification={handleNotification}
                notes={notes}
                groups={groups}
              />
            </Route>
            <Route path='/user'>
              <Settings
                addToGroups={addToGroups}
                addToNotes={addToNotes}
                groups={groups}
                data={data}
                deleteGroup={deleteGroup}
                deleteNote={deleteNote}
                notes={notes}
              />
            </Route>
          </Content>
          {states.addButton ? (
            states.add ? (
              <QuickForm
                notes={notes}
                addToAnimals={addToAnimals}
                data={data}
                handleNotification={handleNotification}
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
