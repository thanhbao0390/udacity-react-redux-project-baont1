//  middleware
export const middleware = (store) => (next) => (action) => {
  console.log('sample middleware');
  return next(action);
};
