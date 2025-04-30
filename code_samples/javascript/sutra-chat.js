/**
 * SUTRA Chat API Example using JavaScript
 * =======================================
 * 
 * This example demonstrates how to use the SUTRA Chat API with Node.js.
 * 
 * Prerequisites:
 * - Node.js installed
 * - OpenAI Node.js package: npm install openai
 * - SUTRA_API_KEY environment variable set
 */

import { OpenAI } from 'openai';
import readline from 'readline';

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration
const DEFAULT_MODEL = 'sutra-v2';
const API_URL = 'https://api.two.ai/v2';

/**
 * Create a SUTRA client with the provided API key
 */
function createSutraClient() {
  const apiKey = process.env.SUTRA_API_KEY;
  
  if (!apiKey) {
    console.error('\x1b[31m%s\x1b[0m', 
      'Error: SUTRA_API_KEY environment variable not found.\n' +
      'Get your API key at: https://www.two.ai/sutra/api\n' +
      'Set it with: export SUTRA_API_KEY=your-key-here'
    );
    process.exit(1);
  }
  
  return new OpenAI({
    apiKey: apiKey,
    baseURL: API_URL,
  });
}

/**
 * Send a prompt to the SUTRA API and stream the response
 */
async function chatWithSutra(client, prompt, model = DEFAULT_MODEL) {
  console.log(`\n🤖 Sending prompt to SUTRA: '${prompt}'`);
  console.log("\n📝 Response:");
  
  try {
    const stream = await client.chat.completions.stream({
      model: model,
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });
    
    for await (const chunk of stream) {
      if (chunk.choices.length > 0) {
        const content = chunk.choices[0].delta?.content;
        const finishReason = chunk.choices[0].finish_reason;
        
        if (content && finishReason === null) {
          process.stdout.write(content);
        }
      }
    }
    console.log('\n');
    
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `Error: ${error.message}`);
  }
}

/**
 * Interactive chat session with SUTRA
 */
async function startInteractiveChat() {
  console.log('=' .repeat(50));
  console.log('SUTRA Chat API Interactive Example');
  console.log('=' .repeat(50));
  console.log('Type "exit" or "quit" to end the session.\n');
  
  const client = createSutraClient();
  
  const askQuestion = () => {
    rl.question('Enter your prompt: ', async (prompt) => {
      if (prompt.toLowerCase() === 'exit' || prompt.toLowerCase() === 'quit') {
        console.log('\nThank you for using SUTRA Chat API. Goodbye!');
        rl.close();
        return;
      }
      
      await chatWithSutra(client, prompt);
      askQuestion();
    });
  };
  
  askQuestion();
}

// Start the interactive chat if run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startInteractiveChat();
}

// Export functions for module usage
export { createSutraClient, chatWithSutra, startInteractiveChat };
