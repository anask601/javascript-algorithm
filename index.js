// (function () {
//   if (!console) {
//     console = {};
//   }
//   let old = console.log;
//   let logger = document.getElementById("log");
//   console.log = function (message) {
//     if (typeof message === "any") {
//       logger.innerHTML +=
//         (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) +
//         "<br />";
//     } else {
//       logger.innerHTML += message + "<br />";
//     }
//   };
// })();

const Item = [
  { name: "bananas", type: "fruit" },
  { name: "cherriew", type: "fruit" },
  { name: "bananas", type: "fruit" },

  { name: "goat", type: "meat" },
  { name: "Pizza", type: "JunkFood" },
];

//  GroupBy function
