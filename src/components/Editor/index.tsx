'use client';

import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import FeatherIcon from 'feather-icons-react';

import getFormatsFromSelectedText from './utils/getFormatsFromSelectedText';
import toggleFormatUtil from './utils/toggleFormat';

import { TEditor } from '@/components/types/Editor/TEditor';

import {
  EditorContainer,
  ToolbarContainer,
  Button,
  Container,
  ErrorMessage,
} from './styles';

const Editor: React.FC<TEditor> = ({ error, onChange, defaultValue }) => {
  const [selectedFormats, setSelectedFormats] = useState([] as string[]);

  const editorRef = useRef<Quill | null>(null);

  useEffect(() => {
    const editor = new Quill('#my-editor', {
      modules: {
        toolbar: '#my-toolbar',
      },
      placeholder: 'Write the article here...✍️',
    });

    editorRef.current = editor;

    function onEditorChange() {
      setSelectedFormats(getFormatsFromSelectedText(editor));
    }

    function onTextChange() {
      const editorValue = editor.root.innerHTML;
      let textValue = editor.getText();

      textValue = textValue.replace(/\n/g, '');

      if (onChange) onChange(editorValue, textValue);
    }

    if (editor && defaultValue) {
      editor.clipboard.dangerouslyPasteHTML(defaultValue ?? '');
      onTextChange();
    }

    editor.on('text-change', onTextChange);
    editor.on('editor-change', onEditorChange);

    return () => {
      editor.off('text-change', onTextChange);
      editor.off('editor-change', onEditorChange);
    };
  }, []);

  function toggleFormat(formatString: string, value?: any) {
    const editor = editorRef.current;
    if (!editor) return;

    toggleFormatUtil(editor, formatString, value);
  }

  return (
    <Container>
      <ToolbarContainer id="my-toolbar">
        <Button
          type="button"
          title="Header 1"
          selected={selectedFormats.includes('header1')}
          onClick={() => toggleFormat('header', 1)}
        >
          H1
        </Button>

        <Button
          type="button"
          title="Header 2"
          selected={selectedFormats.includes('header2')}
          onClick={() => toggleFormat('header', 2)}
        >
          H2
        </Button>

        <Button
          type="button"
          title="Bold"
          selected={selectedFormats.includes('bold')}
          onClick={() => toggleFormat('bold')}
        >
          <FeatherIcon icon="bold" size={20} />
        </Button>

        <Button
          type="button"
          title="Italic"
          selected={selectedFormats.includes('italic')}
          onClick={() => toggleFormat('italic')}
        >
          <FeatherIcon icon="italic" size={20} />
        </Button>
      </ToolbarContainer>

      <span>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <EditorContainer id="my-editor"></EditorContainer>
      </span>
    </Container>
  );
};

export default Editor;
