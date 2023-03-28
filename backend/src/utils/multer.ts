import multer from 'multer';
import path from 'path';
import { Request } from "express";
//multer_config

export default multer({
    storage: multer.diskStorage({}),
    fileFilter: (req: Request, file: any, cb: any) => {
        let ext = path.extname(file.originalname)
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".pdf") {
            cb(new Error('file type not support'), false)
            return
        }
        cb(null, true)
    }
})