

import express from 'express';
import product from '../controller/tcudorp';
import upload from '../utils/multer';

const router = express.Router();

router.get('/productList', product.getProductList);
router.post('/addProductList',upload.array('image', 3), product.addProduct);

export =router  