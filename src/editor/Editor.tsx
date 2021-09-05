import React from 'react';
import styled from 'styled-components/native';
import Container from '../@shared/styled/Container';
import ScrollView from '../@shared/styled/ScrollView';
import Parser from '../parser/Parser';
import Header from './components/Header';
import useEditorLogic from './hooks/useEditorLogic';

interface Props {}

const Editor: React.FC<Props> = () => {
  const logic = useEditorLogic();
  return (
    <Container>
      <Header
        isArchived={logic.isArchived}
        isFavorite={logic.isFavorite}
        toggleNoteArchived={logic.toggleNoteArchived}
        toggleNoteFavorite={logic.toggleNoteFavorite}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title
          multiline
          value={logic.note?.title}
          placeholder={'Title'}
          onChangeText={logic.updateNoteTitle}
        />
        <Content
          multiline
          autoFocus
          placeholder={'Note'}
          onChangeText={logic.handlerTextChange}
          onSelectionChange={logic.onSelectionChange}>
          <Parser opacity={1}>{logic.note?.text}</Parser>
        </Content>
      </ScrollView>
    </Container>
  );
};

const Title = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.primaryText,
}))`
  font-size: 18px;
  margin-top: 5px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.theme.primaryText};
`;

const Content = styled.TextInput.attrs(props => ({
  scrollEnabled: false,
  placeholderTextColor: props.theme.primaryText,
}))``;

export default Editor;
