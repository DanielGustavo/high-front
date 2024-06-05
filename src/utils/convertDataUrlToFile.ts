export default function convertDataUrlToFile(dataurl: string) {
  const arr = dataurl.split(',');

  const mime = (arr[0].match(/:(.*?);/) as any)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;

  const u8arr = new Uint8Array(n);

  while (n) {
    u8arr[n - 1] = bstr.charCodeAt(n - 1);
    n -= 1;
  }

  return new File(
    [u8arr],
    Math.round(Math.random()).toString() + `.${mime.split('/')[1]}`,
    { type: mime }
  );
}
