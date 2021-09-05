import React from 'react';
import {StyleSheet} from 'react-native';
import Card from '../@shared/components/Card';
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
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        renderItem={({item}) => <Card item={item} />}
      />
    </Container>
  );
};

const columnWrapperStyle = StyleSheet.create({
  columnWrapperStyle: {justifyContent: 'space-between'},
}).columnWrapperStyle;

export default Favorites;
