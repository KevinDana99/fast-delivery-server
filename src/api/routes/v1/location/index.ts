import express from "express";

const router = express.Router();

router.get("/location", (_, res) => {
  return res.status(200).json({ status: "ok" });
});

export default router;
