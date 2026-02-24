const roleMiddleware = (requiredRole) => {
  return (req, res, next) => {

    // Kontrollo nëse user ekziston
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Kontrollo rolin
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  };
};

module.exports = roleMiddleware;