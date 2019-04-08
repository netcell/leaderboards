import User from '../../Models/User';

export const authMiddleware = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.status(403).send();
	}
};

export const createAdminUser = async () => {
	try {
		const adminUser = new User({
			username: process.env.ADMIN_USERNAME,
			displayName: 'Admin',
		});
		await User.register(adminUser, process.env.ADMIN_PASSWORD);
	} catch(err) {
		// console.warn(err);
	}
};