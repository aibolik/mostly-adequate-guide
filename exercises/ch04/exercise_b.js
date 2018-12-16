// Refactor to remove all arguments by partially applying the functions.

// filterQs :: [String] -> [String]
// Given
// const filterQs = xs => filter(x => x.match(/q/i), xs);

// Solution
const filterQs = filter(match(/q/i));
