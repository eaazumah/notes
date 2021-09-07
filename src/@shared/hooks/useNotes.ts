import {useDispatch, useSelector} from 'react-redux';
import {INote, INotes, IReduxSate} from '../@types';
import {notesActions} from '../redux/notes/slice';

const selectNotes = (state: IReduxSate) => {
  return state.notes;
};

const getFavorites = (notes: INotes) => {
  return notes.filter(note => note.favorite);
};

const getArchived = (notes: INotes) => {
  return notes.filter(note => note.archived);
};

const getActive = (notes: INotes) => {
  return notes.filter(note => !note.archived);
};

const useNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const active = getActive(notes);
  const archived = getArchived(notes);
  const favorites = getFavorites(notes);

  const reset = () => dispatch(notesActions.reset());
  const addNote = (note: INote) => dispatch(notesActions.addNote(note));

  return {notes, active, archived, favorites, addNote, reset};
};

export default useNotes;
