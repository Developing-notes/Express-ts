import { NextFunction, Request, Response } from "express";
import admin from "../models/nimda";

export const adminRegister = async (req: Request, res: Response, next: NextFunction) => {
    console.log("ENTER ADMIN");
    try {
        let requestData = req.body;

        let data = await admin.create(requestData)
        if (!data) {
            res.json({ status: 0, message: "Data not createed", data: [] });
        } else {
            res.json({ status: 1, message: "Register Successfully", data: data });
        }
    } catch (error) {
        console.log("error: ", error);
    }
};





export const login = async (req: Request, res: Response, next: NextFunction) => {
    let requestData = req.body;

    let getAdminDetails = await admin.findOne({ email: requestData.email })
    if (getAdminDetails == null) {
        res.json({
            status: 1,
            message: "Invalid Records"
        })
    }
    else {
        if (getAdminDetails.password == requestData.password) {
            res.json({
                status: 1, message:
                    "Login Success"
            })
        }
        else {
            res.json({
                status: 0, message:
                    "Invalid E-Mail or Password"
            })
        }
    }
}







export default { adminRegister, login };