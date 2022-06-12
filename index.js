const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

//  returns an array with title case tutorial names:

const titleCased = () => {
  return tutorials.map((line) => {
    const tokens = line.split(" ");
    const tokenWeCapitalize = tokens.map(
      (indexToken) => indexToken.charAt(0).toUpperCase() + indexToken.slice(1)
    );
    const result = tokenWeCapitalize.join(" ");
    return result;
  });
};
