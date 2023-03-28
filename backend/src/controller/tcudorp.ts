import product from "../models/tcudorp";
import cloudinary from '../utils/cloudinary';
import { NextFunction, Request, Response } from "express";
// async function createProduct() {

//   var createProductDetails = [
//     {
//       name: "Tv",
//       category: "Home Entertainment",
//       description: "feels looks good",
//       price: 12000,
//     },
//     {
//       name: "Home theater",
//       category: "Home Entertainment",
//       description: "feels looks good",
//       price: 6000,
//     },

//     {
//       name: "Redmi",
//       category: "Mobiles",
//       description: "fast charging",
//       price: 15000,
//     },
//     {
//       name: "Pendrive",
//       category: "Accessories",
//       description: "Accessories makes everything better",
//       price: 350,
//     },
//     {
//       name: "chair",
//       category: "Furniture",
//       description: "furniture should always be comfortable",
//       price: 2000,
//     },
//     {
//       name: "shirt",
//       category: "Fashion",
//       description: "looks good",
//       price: 600,
//     },
//     {  
//       name: "T-shirt",
//       category: "Fashion",
//       description: "looks good",
//       price: 1000, 
//     },
//     {
//       name: "Engine oil",
//       category: "Car & Motorbike",
//       description: "quality is perfect",
//       price: 500,
//     },
//     {
//       name: "MRF-tyre",
//       category: "Car & Motorbike",
//       description: "quality is perfect",
//       price: 1200,
//     },
//     {
//       name: "Dell",
//       category: "Lenovo",
//       description: "inspiring features",
//       price: 1200,
//     },

//   ]

//   let createProductList = await product.create(createProductDetails)
//   console.log("createProductList: ", createProductList);


// }

// createProduct()
// filterProduct




export const getProductList = async (req: Request, res: Response) => {
  let requestData: any = req.body
  const page = parseInt(requestData.page) || 1;
  const limit = parseInt(requestData.limit) || 5;
  const skipIndex = (page - 1) * limit;

  // Build the Mongoose query object
  const query: any = {};

  if (requestData.name && requestData.name) {
    query.name = { $regex: new RegExp(requestData.name, 'i') };
  }

  if (requestData.name && requestData.name.category) {
    query.category = requestData.name.category;
  }
  // Execute the query and get the total count of documents matching the query
  const products = await product.find(query)
    .limit(limit)
    .skip(skipIndex)
    .exec();
  if (products && products.length == 0) {
    res.json({
      status: 0, message: "No result found", data: []
    });
  }
  else {
    const count = await product.countDocuments(query);
    console.log("count: ", products);

    if (count && count == 0) {
      res.json({
        status: 0, message: "No result found", data: []
      });
    }
    else {
      // Send the paginated results and total count in the response
      res.json({
        status: 1, message: "getProductList Successfully", data: {
          items: products,
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          totalCount: count
        }
      });

    }

  }


}



export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {

    let requestData = req.body


    // const results = [];
    // for (const file of req.files) {
    //   const result = {
    //     originalName: file.originalname,
    //     cloudinaryUrl: file.path
    //   };
    //   results.push(result);
    // }
    // console.log(results);
    const url = [];
    const files: any = req.files;
    for (const file of files) {
      // return
      const { path }:any = file
      const result = await cloudinary.uploader.upload(path)
      url.push(result.secure_url)
    }
    // // return false
    // console.log("url: ", url);
    // let createProduct = {
    //   name: requestData.name,
    //   category: requestData.category,
    //   description: requestData.description,
    //   price: requestData.price,
    //   // image: results
    // }
    res.send('Images uploaded successfully!');
  } catch (error) {
    console.log("error: ", error);

  }

}

export default { getProductList, addProduct };
