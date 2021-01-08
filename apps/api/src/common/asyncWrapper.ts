export const wrap = (fn) => {
  return (req, res, next) => {
    return fn(req, res, next).catch(next);
  };
};
