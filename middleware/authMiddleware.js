export const authenticateUser = async (req, res, next) => {
  console.log('auth middleware');
  next();
};
