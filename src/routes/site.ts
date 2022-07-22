// import type { Express } from "express";
import express from "express";
import siteController from "../controllers/siteController";
import upload from "../middleware/uploadFile";
const router = express.Router();
router.get("/upload", siteController.getUpload);
router.post("/upload", upload.single('image'), siteController.postUpload);
router.get("/", siteController.home);
export default router;