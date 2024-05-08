import { hello } from "./hello";
import { Handler } from "../../shared/types";

export const getHello: Handler = (req, res, next) => {
  try {
    const data = hello();

    res.json({ data });
  } catch (error) {
    next(error);
  }
};
