/*The Six Categories of Fruit:
    - Pomes     apples, pears, and kiwis.
    - Drupes    peaches, cherries, plums, nectarines, and apricots.
    - Berries   blackberries, cranberries, strawberries, and grapes.
    - Melons    cantaloupes, honeydew, watermelon, casaba, crenshaw, and muskmelon.
    - Citrus    oranges, grapefruits, tangerines, lemons, limes
    - Tropical  bananas, pineapples, avocados
*/

const arrayFruit = [
  "apples",
  "pears",
  "kiwis",
  "peaches",
  "cherries",
  "plums",
  "nectarines",
  "apricots",
  "blackberries",
  "cranberries",
  "strawberries",
  "grapes",
  "cantaloupes",
  "honeydew",
  "watermelon",
  "casaba",
  "crenshaw",
  "muskmelon",
  "oranges",
  "grapefruits",
  "tangerines",
  "lemons",
  "limes",
  "bananas",
  "pineapples",
  "avocados",
];

const fruitType = {
  Pomes: 0,
  Drupes: 0,
  Berries: 0,
  Melons: 0,
  Citrus: 0,
  Tropical: 0,
};


for (const eachFruit of arrayFruit) {
       if(eachFruit === "apples" || eachFruit === "pears" || eachFruit === "kiwis" ) 
        fruitType.Pomes += 1;
      else if(eachFruit === "peaches" || eachFruit === "cherries" || eachFruit === "plums" || eachFruit === "nectarines" || eachFruit === "apricots" )
        fruitType.Drupes += 1; 
      else if(eachFruit === "blackberries" || eachFruit === "cranberries" || eachFruit === "strawberries" || eachFruit === "grapes" )
        fruitType.Berries += 1; 
      else if(eachFruit === "oranges" || eachFruit === "grapefruits" || eachFruit === "tangerines" || eachFruit === "lemons" || eachFruit === "limes" )
        fruitType.Citrus += 1; 
      else if(eachFruit === "bananas" || eachFruit === "pineapples" || eachFruit === "avocados" )
        fruitType.Tropical += 1; 
      else
        fruitType.Melons +=1;
}
console.log(arrayFruit);
console.log(fruitType);
console.log(`We have ${fruitType.Berries} berries within the fruit array`);
console.log(`We have ${fruitType.Pomes} pomes within the fruit array`);
console.log(`We have ${fruitType.Drupes} drupes within the fruit array`);
console.log(`We have ${fruitType.Melons} melons within the fruit array`);
console.log(`We have ${fruitType.Citrus} citrus within the fruit array`);
console.log(`We have ${fruitType.Tropical} tropical within the fruit array`);

