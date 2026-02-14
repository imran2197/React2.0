export const convertToFlagUrl = (emoji) => {
  const countryCode = [...emoji]
    .map((char) => char.codePointAt(0) - 127397)
    .map((code) => String.fromCharCode(code))
    .join("")
    .toLowerCase();

  return `https://flagcdn.com/24x18/${countryCode}.png`;
};
