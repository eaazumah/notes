import {FlatList as _FlatList} from 'react-native';
import styled from 'styled-components/native';

const FlatList = styled.FlatList`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
` as unknown as typeof _FlatList;

export default FlatList;
