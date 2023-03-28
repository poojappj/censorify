var censor=require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("mad,bad and sad"));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("it is a gloomy day"));

