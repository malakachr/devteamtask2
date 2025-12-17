const geminiService = require('../services/gemini.service');

exports.summarize = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });

    const summary = await geminiService.summarizeText(text);
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.ask = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: 'Question is required' });

    const answer = await geminiService.askQuestion(question);
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};