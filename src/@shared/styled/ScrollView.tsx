import styled from 'styled-components/native';

const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding-horizontal: 18px;
  background-color: ${props => props.theme.backgroundColor};
`;

export default ScrollView;
