import React from 'react';
import styled from 'styled-components/native';
import Parser from '../../parser/Parser';
import capitalize from '../helpers/capitalize';
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
  const title = capitalize(props.item.title);
  const openEditor = getOpenEditor(props.item.id);
  return (
    <Container activeOpacity={0.8} onPress={openEditor}>
      <Title numberOfLines={1}>{title}</Title>
      <Parser numberOfLines={10} opacity={0.8}>
        {props.item.text}
      </Parser>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-horizontal: 7px;
  border-width: 1px;
  border-color: ${props => props.theme.surface};
`;

const Title = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${props => props.theme.primaryText};
`;

export default Card;
