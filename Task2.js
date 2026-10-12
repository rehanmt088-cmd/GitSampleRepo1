let javaScriptMarks = 75;
let testingMarks = 80;
let automationMarks = 70;

let totalMarks = javaScriptMarks + testingMarks + automationMarks;

let averageMarks = totalMarks / 3;

let passedJavaScript = javaScriptMarks >= 40;

console.log("JavaScript Marks:", javaScriptMarks);
console.log("Total Marks     :", totalMarks);
console.log("Average Marks   :", averageMarks);
console.log("JavaScript Pass :", passedJavaScript);