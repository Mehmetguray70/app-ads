const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Backend calisiyor" });
});

app.post("/compare", async (req, res) => {
  const { productName, storePrice, storeCurrency } = req.body;

  return res.json({
    ok: true,
    source: "test",
    productName,
    storePrice,
    storeCurrency,
    message: "Compare endpoint hazir"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

