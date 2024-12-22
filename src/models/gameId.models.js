import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema({
    bgmiId: {
        type: String,
        default: "",
    },
    codmId: {
        type: String,
        default: "",
    },
    valorantId: {
        riotId: {
            type: String,
        },
        tagline: {
            type: String,
        },
    },
    freefireId: {
        type: String,
        default: "",
    },
    asphaltId: {
        type: String,
        default: "",
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true 
    },
}, {
    timestamps: true,
});

export const Game = mongoose.model("Game", gameSchema);