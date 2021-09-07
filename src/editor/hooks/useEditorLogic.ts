import {useRoute} from '@react-navigation/native';
import debounce from 'debounce';
import {useEffect, useState} from 'react';
import {IEditorRoute} from '../../@shared/@types';
import useNote from '../../@shared/hooks/useNote';
import getNewNote from '../helpers/getNewNote';
import getNoteIdFromRoute from '../helpers/getNoteIdFromRoute';

const useEditorLogic = () => {
  const route = useRoute<IEditorRoute>();
  const idFromRoute = getNoteIdFromRoute(route);
  const [noteId, setNoteId] = useState(idFromRoute);
  const [isEditing, setIsEditing] = useState(!noteId);

  const noteResult = useNote(noteId);

  const handlerTextChange = debounce(noteResult.updateNoteText, 500);

  const toggleIsEditing = () => setIsEditing(!isEditing);

  useEffect(() => {
    if (!noteId) {
      const newNote = getNewNote();
      noteResult.addNote(newNote);
      setNoteId(newNote.id);
    }
    return () => {
      noteResult.cleanNotes();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isEditing,
    setIsEditing,
    ...noteResult,
    toggleIsEditing,
    handlerTextChange,
  };
};

export default useEditorLogic;
