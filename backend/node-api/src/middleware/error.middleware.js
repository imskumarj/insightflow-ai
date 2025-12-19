const errorMiddleware = (err, req, res, next) => {
  console.error("❌ Error:", err.message);

  if (err.response) {
    // Error from ML service
    return res.status(err.response.status).json({
      error: err.response.data || "ML service error"
    });
  }

  res.status(500).json({
    error: "Internal Server Error"
  });
};

export default errorMiddleware;
