const express = require("express");

const {
  handleGenerateNewShortUrl,
  handleRedirectToUrl,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/url", handleGenerateNewShortUrl);

router.get("/:shortId", handleRedirectToUrl);

router.get("/url/analytics/:shortId", handleGetAnalytics);

module.exports = router;
