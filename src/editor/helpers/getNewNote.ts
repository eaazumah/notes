import {nanoid} from 'nanoid';

const getNewNote = () => {
  return {
    text: '',
    title: '',
    id: nanoid(),
    favorite: false,
    archived: false,
    createdAt: Date.now(),
  };
};

export default getNewNote;
