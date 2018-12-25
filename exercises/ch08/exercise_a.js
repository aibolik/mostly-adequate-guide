// Use `add` and `map` to make a function that increments a value inside a functor.

// incrF :: Functor f => f Int -> f Int
// Given
// const incrF = undefined;
const incrF = map(add(1));
