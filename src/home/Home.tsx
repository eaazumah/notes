import React from 'react';
import {FlatList} from 'react-native';
import {renderCardItem} from '../@shared/components/Card';
import {renderEmpty} from '../@shared/components/Empty';
import Header from '../@shared/components/Header';
import useNotes from '../@shared/hooks/useNotes';
import Container from '../@shared/styled/Container';
import AddNoteButton from './components/AddNoteButton';

interface Props {}

const Home: React.FC<Props> = () => {
  const {active} = useNotes();
  return (
    <Container>
      <Header title={'Notes'} />
      <FlatList
        data={active}
        renderItem={renderCardItem}
        scrollEnabled={!!active.length}
        ListEmptyComponent={renderEmpty}
      />
      <AddNoteButton />
    </Container>
  );
};

export default Home;
