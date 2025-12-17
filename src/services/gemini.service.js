const fetch = require('node-fetch');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

exports.summarizeText = async (text) => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: `Summarize the following:\n\n${text}` }] }
        ]
      })
    });

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No summary returned';
  } catch (err) {
    console.error('Gemini summarize error:', err);
    throw new Error('Failed to summarize text');
  }
};

exports.askQuestion = async (prompt) => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: prompt }] }
        ]
      })
    });

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No answer returned';
  } catch (err) {
    console.error('Gemini ask error:', err);
    throw new Error('Failed to process question');
  }
};