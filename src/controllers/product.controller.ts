import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();

const productController: T = {};

/** SPA */



/** SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();
    // console.log("data: ", data);
    console.log("products:", data);

    res.render("products", { products: data });    // products page ga boradi | (EJS)
  } catch (err) {
    console.log("Error, getAllProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
  try {
    console.log("createNewProduct");
    // console.log("req.file:", req.files); // bir nechta rasm un "files"
    // console.log("req.body:", req.body); // bunda publishing qanday data.larni tayyorlayotganini koriw

    /* Kamida 1ta rasm yuklagan boliwi kk */
    if(!req.files?.length) 
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    /* interface dan foydalanib */
    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {  // req.files ichidan "map" orqali iteration qiliw
      return ele.path.replace(/\\/g, "/"); // only for Windows
    });

    // console.log("data: ", data);

/*** CALL qismi...*/
    await productService.createNewProduct(data);
    res.send(
      `<script> alert("Sucessful creation!"); window.location.replace('/admin/product/all') </script>`
    );

    // res.send("DONE!");
  } catch (err) {
    console.log("Error, createNewProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/product/all') </script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    const id = req.params.id;
    // console.log("id:", id);

    const result = await productService.updateChosenProduct(id, req.body);

    // res.send(result);
    res.status(HttpCode.OK).json({data: result});
  } catch (err) {
    console.log("Error, updateChosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};




export default productController;