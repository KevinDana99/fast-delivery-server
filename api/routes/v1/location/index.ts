import express from "express";

const router = express.Router();

router.get("/location", (_, res) => {
  return res.status(200).json({ status: "ok" });
});

router.get("/location/:id", (req, res) => {
  return res.status(200).json({ id: req.params.id });
});

router.get("/location/all", (req, res) => {
  return res.status(200).json(["location", "location2", "location3"]);
});

export default router;
