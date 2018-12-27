// Write the isomorphisms between String and [Char].
//
// As a reminder, the following functions are available in the exercise's context:
//
//   split :: String -> String -> [String]
//   intercalate :: String -> [String] -> String

// strToList :: String -> [Char]
// strToList :: String -> [Char]
const strToList = compose(split(''));

// listToStr :: [Char] -> String
const listToStr = compose(intercalate(''));
