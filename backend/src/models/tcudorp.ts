import mongoose from "mongoose";
export interface productModel extends mongoose.Document {
    name: string;
    category: string;
    description: string;
    price: number;
    highLights: string;
    color: string;
    sellingCount: string;
    ratings: string[];
    image: string[];
    availableOffers: string[];
}

export const productSchema = new mongoose.Schema<productModel>({
    name: { type: String, default: "" },
    category: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    highLights: { type: String, default: "" },
    color: { type: String, default: "" },
    ratings: {
        type: [String],
        default: []
    },
    image: {
        type: [String],
        default: []
    },
    availableOffers: {
        type: [String],
        default: []
    },
    sellingCount: { type: String, default: "" },
});

const admin = mongoose.model<productModel>("tcudorp", productSchema);
export default admin;
