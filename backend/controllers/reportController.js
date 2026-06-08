const dailyReport = async (req, res) => {
  res.json({
    message: "Daily Report",
  });
};

const weeklyReport = async (req, res) => {
  res.json({
    message: "Weekly Report",
  });
};

const monthlyReport = async (req, res) => {
  res.json({
    message: "Monthly Report",
  });
};

export {
  dailyReport,
  weeklyReport,
  monthlyReport,
};