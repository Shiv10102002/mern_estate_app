import express, { Router } from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createListing,
  deleteListing,
  getUserListing,
  updateListing,
  getListing,
  getSearchListings,
} from "../controllers/listing.controller.js";

const router = express.Router();
router.post('/create',verifyToken,createListing);
router.get('/listings/:id', verifyToken,getUserListing );
router.delete('/delete/:id',verifyToken,deleteListing);
router.post('/update/:id',verifyToken,updateListing);
router.get("/getListingbyId/:id",  getListing);
router.get("/getSearchListing", getSearchListings);




export default router;