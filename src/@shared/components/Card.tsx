import React from 'react';
import styled from 'styled-components/native';
import Parser from '../../parser/Parser';
import {INote} from '../@types';
import {getOpenEditor} from '../services/navigator';

interface ICardItem {
  id: string;
  createdAt: number;
  title: string;
  text: string;
  favorite: boolean;
}

interface ICardProps {
  item: ICardItem;
}

const Card: React.FC<ICardProps> = props => {
  const openEditor = getOpenEditor(props.item.id);
  console.log(props.item.id);
  return (
    <Container activeOpacity={0.8} onPress={openEditor}>
      <Parser maxHeight={200} opacity={0.8} text={props.item.text} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-horizontal: 7px;
  border-width: 1.5px;
  max-height: 200px;
  border-color: ${props => props.theme.surface};
`;

export default Card;

export const renderItem = ({item}: {item: INote}) => {
  return <Card item={item} />;
};
