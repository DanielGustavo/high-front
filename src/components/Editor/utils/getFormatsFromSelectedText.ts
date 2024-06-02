import Quill from 'quill';

export default function getFormatsFromSelectedText(editor: Quill) {
  const selection = editor.getSelection(false);
  if (!selection) return [];

  const formats = editor.getFormat(selection);
  const formatsFromSelectedText = new Set<string>();

  Object.entries(formats).forEach(([key, formatValue]) => {
    let formatKey = key;

    if (typeof formatValue === 'number') {
      formatKey += String(formatValue);
    }

    if (formatValue) formatsFromSelectedText.add(formatKey);
    else formatsFromSelectedText.delete(formatKey);
  });

  return Array.from(formatsFromSelectedText)
}
