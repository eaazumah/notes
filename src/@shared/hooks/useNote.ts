import {useDispatch} from 'react-redux';
import {INote, INotes} from '../@types';
import {notesActions} from '../redux/notes/slice';
import useNotes from './useNotes';

const getIsArchived = (note?: INote) => {
  return note?.archived;
};

const getIsFavorite = (note?: INote) => {
  return note?.favorite;
};

const findNote = (id: string, notes: INotes) => {
  return notes.find(note => id === note.id);
};

const useNote = (id = '') => {
  const {notes} = useNotes();
  const dispatch = useDispatch();

  const note = findNote(id, notes);
  const isArchived = getIsArchived(note);
  const isFavorite = getIsFavorite(note);

  const updateNote = (_note: INote) => {
    dispatch(notesActions.updateNote(_note));
  };

  const updateNoteTitle = (title: string) => {
    dispatch(notesActions.updateNote({id, title}));
  };

  const updateNoteText = (text: string) => {
    dispatch(notesActions.updateNote({id, text}));
  };

  const addNote = (_note: INote) => {
    dispatch(notesActions.addNote(_note));
  };

  const deleteNote = () => {
    dispatch(notesActions.deleteNote(id));
  };

  const cleanNotes = () => {
    dispatch(notesActions.cleanNotes());
  };

  const toggleNoteArchived = () => {
    if (!note) {
      return;
    }
    if (!note.archived) {
      updateNote({...note, archived: true, favorite: false});
      return;
    }
    updateNote({...note, archived: false});
  };

  const toggleNoteFavorite = () => {
    if (!note) {
      return;
    }
    updateNote({...note, favorite: !note.favorite});
  };

  return {
    note,
    addNote,
    isArchived,
    isFavorite,
    updateNote,
    deleteNote,
    cleanNotes,
    updateNoteText,
    updateNoteTitle,
    toggleNoteArchived,
    toggleNoteFavorite,
  };
};

export default useNote;
