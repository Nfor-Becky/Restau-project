const generateQRCode = async (req, res) => {
  res.json({
    message: "Generate QR Code",
  });
};

const validateQRCode = async (req, res) => {
  res.json({
    message: "Validate QR Code",
  });
};

export {
  generateQRCode,
  validateQRCode,
};