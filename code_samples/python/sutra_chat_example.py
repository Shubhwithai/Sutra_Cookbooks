#!/usr/bin/env python3
"""
SUTRA Chat API Example - Basic Usage
====================================

This example demonstrates how to use the SUTRA Chat API for a simple conversation.
"""

import os
import argparse
from openai import OpenAI

def setup_argparse():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="SUTRA Chat API Example")
    parser.add_argument("--prompt", type=str, default="Tell me about Mars in 3 paragraphs.",
                        help="Prompt to send to the SUTRA API")
    parser.add_argument("--max_tokens", type=int, default=1024,
                        help="Maximum number of tokens to generate")
    parser.add_argument("--temperature", type=float, default=0.7,
                        help="Temperature for text generation (0.0-1.0)")
    parser.add_argument("--model", type=str, default="sutra-v2",
                        help="SUTRA model to use")
    return parser.parse_args()

def get_api_key():
    """Get SUTRA API key from environment variable."""
    api_key = os.environ.get("SUTRA_API_KEY")
    if not api_key:
        raise ValueError(
            "SUTRA API key not found. Please set the SUTRA_API_KEY environment variable."
            "\nGet your API key at: https://www.two.ai/sutra/api"
        )
    return api_key

def create_sutra_client(api_key):
    """Create and return a SUTRA client."""
    url = 'https://api.two.ai/v2'
    return OpenAI(base_url=url, api_key=api_key)

def chat_with_sutra(client, prompt, model="sutra-v2", max_tokens=1024, temperature=0.7):
    """Interact with the SUTRA model."""
    print(f"\n🤖 Sending prompt to SUTRA: '{prompt}'")
    print("\n📝 Response:")
    
    try:
        # Create a streaming completion
        stream = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=max_tokens,
            temperature=temperature,
            stream=True
        )
        
        # Process the stream
        for chunk in stream:
            if len(chunk.choices) > 0:
                content = chunk.choices[0].delta.content
                finish_reason = chunk.choices[0].finish_reason
                if content and finish_reason is None:
                    print(content, end='', flush=True)
        print("\n")
        
    except Exception as e:
        print(f"❌ Error: {e}")

def main():
    """Main function to run the SUTRA chat example."""
    args = setup_argparse()
    
    try:
        # Get API key and create client
        api_key = get_api_key()
        client = create_sutra_client(api_key)
        
        # Chat with SUTRA
        chat_with_sutra(
            client, 
            args.prompt,
            model=args.model,
            max_tokens=args.max_tokens, 
            temperature=args.temperature
        )
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    print("=" * 50)
    print("SUTRA Chat API Example")
    print("=" * 50)
    main()
