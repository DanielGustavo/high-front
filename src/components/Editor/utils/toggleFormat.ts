import Quill from 'quill';

export default function toggleFormat(
  editor: Quill,
  formatString: string,
  cb: () => void,
  value?: any
) {
  const selection = editor.getSelection(true);

  const selectionObjNotProvided = !selection;
  if (selectionObjNotProvided) return;

  const formats = editor.getFormat(selection);
  const formatValue = formats[formatString];

  const newNumericValue = value !== formatValue ? value : 0;
  const newFormatValue =
    typeof value === 'number' ? newNumericValue : !formatValue;

  editor.format(formatString, newFormatValue);

  cb();
}
