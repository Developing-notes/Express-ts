

import express from 'express';
import admin from '../controller/nimda';

const router = express.Router();

router.post('/register', admin.adminRegister);
router.post('/login', admin.login);

export =router