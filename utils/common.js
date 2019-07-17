export function randomString(length = 7) {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let text = '';

  for (let i = 0; i < length; i++)
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

  return text;
}

export function randomId() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
