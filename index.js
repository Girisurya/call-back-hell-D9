// CALL BACK HELL

setTimeout(() => {
  document.getElementById("timer").innerHTML = 10;
  setTimeout(() => {
    document.getElementById("timer").innerHTML = 9;
    setTimeout(() => {
      document.getElementById("timer").innerHTML = 8;
      setTimeout(() => {
        document.getElementById("timer").innerHTML = 7;
        setTimeout(() => {
          document.getElementById("timer").innerHTML = 6;
          setTimeout(() => {
            document.getElementById("timer").innerHTML = 5;
            setTimeout(() => {
              document.getElementById("timer").innerHTML = 4;
              setTimeout(() => {
                document.getElementById("timer").innerHTML = 3;
                setTimeout(() => {
                  document.getElementById("timer").innerHTML = 2;
                  setTimeout(() => {
                    document.getElementById("timer").innerHTML = 1;
                    setTimeout(() => {
                      document.getElementById("timer").innerHTML =
                        "HAPPY INDEPENDENCE DAY";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// // ********************* example 1 **********************************
// // function display(value) {
// //   console.log("this value printed in display function is" + value);
// // }

// // function add(a, b, display)
// //  {
// //     console.log("the input is "+a+","+b)
// //   display(a + b);
// // }
// // add(10, 5, display);

// // ********************* example 2 **********************************

// // let value = [1, 2, 3, 4, 5];
// // function foreachOwn(value, callback) {
// //   for (let i = 0; i < value.length; i++) {
// //     callback(value[i]);
// //   }
// // }

// // foreachOwn(value, (e) => {
// //   console.log("callback" + e);
// // });

// // // asusual code
// // value.forEach((e) => {
// //   console.log("foreach" + e);
// // });

// setTimeout(() => {
//   document.getelement
//   setTimeout(() => {
//     console.log("call back 9");
//     setTimeout(() => {
//       console.log("call back 8");
//       setTimeout(() => {
//         console.log("call back 7");
//         setTimeout(() => {
//           console.log("call back 6");
//           setTimeout(() => {
//             console.log("call back 5");
//             setTimeout(() => {
//               console.log("call back 4");
//               setTimeout(() => {
//                 console.log("call back 3");
//                 setTimeout(() => {
//                   console.log("call back 2");
//                   setTimeout(() => {
//                     console.log("call back 1");
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
