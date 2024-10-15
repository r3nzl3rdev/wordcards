export default function getAlphabet() {
  const uppercaseAlphabet = [];
  for (let i = 65; i <= 90; i++) {
    uppercaseAlphabet.push(String.fromCharCode(i));
  }

  return uppercaseAlphabet;
}
