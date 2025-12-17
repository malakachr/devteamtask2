exports.getInfo = (req, res) => {
    res.json({
      appName: process.env.APP_NAME,
      currentDate: new Date().toISOString()
    });
  };
  