import React from 'react';
import {renderItem} from '../@shared/components/Card';
import {renderEmpty} from '../@shared/components/Empty';
import Header from '../@shared/components/Header';
import useNotes from '../@shared/hooks/useNotes';
import Container from '../@shared/styled/Container';
import FlatList from '../@shared/styled/FlatList';
import AddNoteButton from './components/AddNoteButton';

interface Props {}

const Home: React.FC<Props> = () => {
  const {active} = useNotes();
  return (
    <Container>
      <Header title={'Notes'} />
      <FlatList
        data={active}
        renderItem={renderItem}
        scrollEnabled={!!active.length}
        ListEmptyComponent={renderEmpty}
      />
      <AddNoteButton />
    </Container>
  );
};

export default Home;
