const RunningText = require("../models/runningText");

exports.updateRunningText = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedData = {
      name,
    };

    res.status(200).json(
      await RunningText.update(updatedData, {
        where: { id },
        returning: true,
      })
    );
  } catch (error) {
    console.error("Error updating layanan:", error);
    res.status(500).json({ message: "Error updating layanan", error });
  }
};

exports.getAllRunningText = async (req, res) => {
  try {
    const runningTexts = await RunningText.findAll();

    res.status(200).json(runningTexts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching runningTexts", error });
  }
};
