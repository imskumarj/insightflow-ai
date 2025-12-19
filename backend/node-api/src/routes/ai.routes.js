import express from "express";
const router = express.Router();

router.post("/insights", async (req, res) => {
  res.json({
    answer: "Discount negatively impacts profit the most."
  });
});

export default router;
