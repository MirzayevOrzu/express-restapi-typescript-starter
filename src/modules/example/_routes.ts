import express from "express";
import { getHello } from "./_controller";

const router = express.Router();

router.get("/", getHello);

export default router;
