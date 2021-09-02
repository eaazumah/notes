import {FlatList as _FlatList} from 'react-native';
import styled from 'styled-components/native';

const FlatList = (styled.FlatList`
  padding-horizontal: 15px;
  background-color: ${props => props.theme.backgroundColor};
` as unknown) as typeof _FlatList;

export default FlatList;