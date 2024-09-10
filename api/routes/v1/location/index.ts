import express from "express";

const router = express.Router();

router.get("/location", (_, res) => {
  return res.status(200).json({ status: "ok" });
});
router.get("/location/all", (_, res) => {
  return res.status(200).json(["location", "location2", "location3"]);
});

router.get("/location/:id", (req, res) => {
  return res.status(200).json({ id: req.params.id });
});

export default router;
