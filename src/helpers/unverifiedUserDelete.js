import { User } from "../models/user.models.js";

const deleteUnverifiedUsers = async () => {
    const expirationTime = 24 * 60 * 60 * 1000;
    const now = new Date();
    try {
        const expiredUsers = await User.find({
            isVerified: false,
            createdAt: { $lt: new Date(now.getTime() - expirationTime) },
        });
        if (expiredUsers.length > 0) {
            await User.deleteMany({
                _id: { $in: expiredUsers.map((user) => user._id) },
            });
            console.log(`Deleted ${expiredUsers.length} unverified users.`);
        }
    } catch (error) {
        console.log("Error In Deleting Unverified Users: ", error.message);
    }
}

export default deleteUnverifiedUsers;