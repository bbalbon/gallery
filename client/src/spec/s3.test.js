// const { s3 } = require("../server/helpers.js");
// // mock promises for s3?
// // var AWS = require("aws-sdk");
// // describe("mock promise", () => {
// //   it("test", () => {
// //     var s3 = new AWS.S3({ region: "us-west-1" });
// //     var request = s3.putObject({
// //       Bucket: "fecgallery",
// //       Key: "cambodia"
// //     });
// //     request.promise = () => Promise.resolve("mockdata");
// //     request.promise().then(data => {
// //       expect(data).toEqual("mockResponse");
// //     });
// //   });
// // });

// // testing S3 functionality
// s3.putObject({}, () => {
//   return "successful test";
// });

// let AWS = require("aws-sdk");
// describe("test", () => {
//   let result;
//   var params = {
//     Bucket: "fecgallery"
//   };
//   beforeEach(() => {
//     AWS.S3 = jest.fn().mockImplementation(() => {
//       return {
//         putObject(params, cb) {
//           result = cb();
//         }
//       };
//     });
//   });
//   test("call s3", () => {
//     expect(result).toBe("successful test");
//   });
// });
