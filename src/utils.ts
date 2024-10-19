export function getAlphabet() {
  const uppercaseAlphabet = [];
  for (let i = 65; i <= 90; i++) {
    uppercaseAlphabet.push(String.fromCharCode(i));
  }

  return uppercaseAlphabet;
}

export function removeLastWord(str: string) {
  const trimmedStr = str.trim();
  const words = trimmedStr.split(" ");
  words.pop();

  return words.join(" ");
}

export function getLastWord(str: string) {
  const trimmedStr = str.trim();
  const words = trimmedStr.split(" ");

  return words[words.length - 1];
}
