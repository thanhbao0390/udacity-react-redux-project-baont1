

// authentication middleware
export const authentication = (store) => (next) => (action) => {
  console.log('checkAuthRequired----');
  
  return next(action);
};


//authenticationHelper.js
// const pathToAuthMap = [
//   {
//     url: "/",
//     isRegex: false,
//     requireAuth: true,
//   },
//   {
//     url: "/login",
//     isRegex: false,
//     requireAuth: false,
//   },
//   {
//     url: /item\/\d+/,
//     isRegex: true,
//     requireAuth: true,
//   },
// ];

// const checkAuthRequired = (path) => {
//   for (const element of pathToAuthMap) {
//     if (element.isRegex) {
//       if (element.url.test(path)) {
//         return element.requireAuth;
//       }
//     } else if (element.url === path) {
//       return element.requireAuth;
//     }
//   }
//   return false; // default value
// };