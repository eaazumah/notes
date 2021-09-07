import React from 'react';
import styled from 'styled-components/native';
import Container from '../@shared/styled/Container';
import ScrollView from '../@shared/styled/ScrollView';
import Parser from '../parser/Parser';
import Header from './components/Header';
import ToolBar from './components/ToolBar';
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
        {logic.isEditing ? (
          <NoteTextInput
            multiline
            autoFocus
            placeholder={'Note'}
            onChangeText={logic.handlerTextChange}
            defaultValue={logic.note?.text}
          />
        ) : (
          <Parser text={logic.note?.text} />
        )}
      </ScrollView>
      <ToolBar
        isEditing={logic.isEditing}
        toggleIsEditing={logic.toggleIsEditing}
      />
    </Container>
  );
};

const NoteTextInput = styled.TextInput.attrs(props => ({
  scrollEnabled: false,
  placeholderTextColor: props.theme.primaryText,
}))`
  color: ${props => props.theme.primaryText};
`;

export default Editor;
