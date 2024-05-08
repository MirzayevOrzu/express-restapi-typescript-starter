import express from "express";
import handleErrors from "../shared/errors/handle-errors";
import exampleRoutes from "../modules/example/_routes";

const router = express.Router();

router.use(exampleRoutes);

router.use(handleErrors);

export default router;
