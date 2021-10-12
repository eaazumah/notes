import {useSelector} from 'react-redux';
import {INotes, IReduxSate} from '../@types';

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
  const notes = useSelector(selectNotes);
  const active = getActive(notes);
  const archived = getArchived(notes);
  const favorites = getFavorites(notes);

  return {notes, active, archived, favorites};
};

export default useNotes;
