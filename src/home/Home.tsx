import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Card from '../@shared/components/Card';
import Header from '../@shared/components/Header';
import useNotes from '../@shared/hooks/useNotes';
import Container from '../@shared/styled/Container';
import FlatList from '../@shared/styled/FlatList';
import AddNoteButton from './components/AddNoteButton';

interface Props {}

const Home: React.FC<Props> = () => {
  const {active, reset} = useNotes();
  useEffect(() => {
    // reset();
  }, []);
  return (
    <Container>
      <Header title={'Notes'} />
      <FlatList
        data={active}
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        renderItem={({item}) => <Card item={item} />}
      />
      <AddNoteButton />
    </Container>
  );
};

const columnWrapperStyle = StyleSheet.create({
  columnWrapperStyle: {justifyContent: 'space-between'},
}).columnWrapperStyle;

export default Home;
