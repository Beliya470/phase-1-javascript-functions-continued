// Define a function using function declaration
function razzle() {
    console.log("You've been razzled!");
  }
  
  // Call the function
  razzle();
  
  // Implement the saturdayFun function
  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Test the saturdayFun function
  console.log(saturdayFun()); // This Saturday, I want to roller-skate!
  console.log(saturdayFun("paint")); // This Saturday, I want to paint!
  
  // Define an IIFE
  (function () {
    console.log("Immediately invoked function expression");
  })();
  
  // Implement the mondayWork function
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Test the mondayWork function
  console.log(mondayWork()); // This Monday, I will go to the office.
  console.log(mondayWork("study")); // This Monday, I will study.
  
  // Implement the wrapAdjective function
  const wrapAdjective = function (flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };
  
  // Test the wrapAdjective function
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // You are !!!a dedicated programmer!!!
  console.log(wrapAdjective("%")("an awesome person")); // You are %an awesome person%!
  