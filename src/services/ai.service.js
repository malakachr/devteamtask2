const fetch = require('node-fetch');

const GEMINI_API_URL = process.env.GEMINI_API_URL; // e.g. https://api.google.com/gemini/v1
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

exports.summarizeText = async (text) => {
  const response = await fetch(`${GEMINI_API_URL}/summarize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GEMINI_API_KEY}`
    },
    body: JSON.stringify({ text })
  });

  const data = await response.json();
  return data.summary;
};

exports.askQuestion = async (question) => {
  const response = await fetch(`${GEMINI_API_URL}/ask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GEMINI_API_KEY}`
    },
    body: JSON.stringify({ question })
  });

  const data = await response.json();
  return data.answer;
};