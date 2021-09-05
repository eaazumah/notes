import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {IEditorRoute} from '../../@shared/@types';
import useNote from '../../@shared/hooks/useNote';
import getNewNote from '../helpers/getNewNote';
import getNoteIdFromRoute from '../helpers/getNoteIdFromRoute';
import useProcessor from './useProcessor';

const useEditorLogic = () => {
  const route = useRoute<IEditorRoute>();
  const idFromRoute = getNoteIdFromRoute(route);
  const [noteId, setNoteId] = useState(idFromRoute);

  const query = useNote(noteId);
  const processor = useProcessor({
    text: query.note?.text,
    updateText: query.updateNoteText,
  });

  React.useEffect(() => {
    if (!noteId) {
      const newNote = getNewNote();
      query.addNote(newNote);
      setNoteId(newNote.id);
    }
    return () => {
      query.cleanNotes();
    };
  }, []);

  return {...query, ...processor};
};

export default useEditorLogic;
