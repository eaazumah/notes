import React from 'react';
import {renderCardItem} from '../@shared/components/Card';
import {renderEmpty} from '../@shared/components/Empty';
import Header from '../@shared/components/Header';
import useNotes from '../@shared/hooks/useNotes';
import Container from '../@shared/styled/Container';
import FlatList from '../@shared/styled/FlatList';

interface Props {}

const Archived: React.FC<Props> = () => {
  const {archived} = useNotes();
  return (
    <Container>
      <Header title={'Archived'} />
      <FlatList
        data={archived}
        renderItem={renderCardItem}
        ListEmptyComponent={renderEmpty}
        scrollEnabled={!!archived.length}
      />
    </Container>
  );
};

export default Archived;
