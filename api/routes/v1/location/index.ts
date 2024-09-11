import express from "express";

const router = express.Router();

router.get("/location", (_, res) => {
  return res.status(200).json({ status: "ok" });
});
router.get("/location/all", (_, res) => {
  return res.status(200).json(["location", "location2", "location3"]);
});

router.get("/location/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return res.status(200).json(["location", "location2", "location3"][id]);
});

export default router;
