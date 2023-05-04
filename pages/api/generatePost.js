import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req, res) {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 3600,
      prompt: 'Write a tweet about Love',
    });

    console.log('response: ', response);

    res.status(200).json({ name: 'generate post' });
  } catch (error) {
    console.error('Error while calling OpenAI API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
