import passwordQueue from "./passwordQueue.js";
import bcrypt from "bcryptjs";
import { User } from "../../models/user.models.js";
import ApiError from "../ApiError.js"
const jobResults = new Map();

passwordQueue.process(async (job)=>{
    const { userId , plainPassword } = job.data;

    try {
        const hashedPassword = await bcrypt.hash(plainPassword,13);
        const user = await User.findByIdAndUpdate(
            userId,
            { password:hashedPassword },
            { new:true }
        );
    
        jobResults.set(job.id, { username: user.username, hashedPassword });
    } catch (error) {
        console.error(`Failed to hash password for user: ${userId}`, err);
        jobResults.set(job.id, { error: "Password hashing failed." });
        throw error;
    }
});

export default jobResults;
