import React from 'react';
import {renderItem} from '../@shared/components/Card';
import {renderEmpty} from '../@shared/components/Empty';
import Header from '../@shared/components/Header';
import useNotes from '../@shared/hooks/useNotes';
import Container from '../@shared/styled/Container';
import FlatList from '../@shared/styled/FlatList';

interface Props {}

const Favorites: React.FC<Props> = () => {
  const {favorites} = useNotes();
  return (
    <Container>
      <Header title={'Favorites'} />
      <FlatList
        data={favorites}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        scrollEnabled={!!favorites.length}
      />
    </Container>
  );
};

export default Favorites;
