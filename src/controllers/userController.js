
const User = require('../models/user');

exports.updateProfile = async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    const findEmail = req.params.email;
    try {
        const user = await User.findOne({ where: { email: findEmail } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const [updated] = await User.update(
            { name, phoneNumber, password },
            { where: { email: email } }
        );

        if (updated) {
            res.status(200).json({ message: 'Profile updated successfully!' });
        } else {
            res.status(500).json({ error: 'Failed to update profile' });
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



exports.getUserProfile = async (req, res) => {
    const { email } = req.query;

    try {

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return the user profile
        res.status(200).json({
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
