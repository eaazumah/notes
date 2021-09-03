import faker from 'faker';
import {nanoid} from 'nanoid';

const items = Array(20).fill(1);

const getMockNotes = () => {
  return items.map(() => ({
    id: nanoid(),
    createdAt: Date.now(),
    title: faker.lorem.words(),
    text: faker.lorem.sentences(),
    favorite: faker.datatype.boolean(),
  }));
};

export default getMockNotes;
