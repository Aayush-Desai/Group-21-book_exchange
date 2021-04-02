const processPromise = (promise) => {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => [err,null]);
};
module.exports =processPromise;