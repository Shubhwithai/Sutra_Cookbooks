# SUTRA™ - Powerful Multilingual AI Model

<p align="center">
  <img src="https://github.com/Shubhwithai/Sutra_Cookbooks/blob/main/images/logo-.png" alt="TWO AI Logo" width="400"/>
</p>

[![API Status](https://img.shields.io/badge/API-Active-success.svg)](https://www.two.ai/sutra/api)
[![Documentation](https://img.shields.io/badge/Docs-Available-blue.svg)](https://docs.two.ai/version-2/docs/get-started-with-sutra)
[![Languages](https://img.shields.io/badge/Languages-50%2B-orange.svg)](https://www.two.ai/sutra)
[![Twitter Follow](https://img.shields.io/twitter/follow/two_platforms?style=social)](https://twitter.com/two_platforms)

## Overview

SUTRA is a family of large multi-lingual language models (LMLMs) developed by [TWO AI](https://www.two.ai). SUTRA's dual-transformer architecture extends the power of both MoE (Mixture of Experts) and Dense AI language model approaches, delivering cost-efficient multilingual capabilities across 50+ languages.

SUTRA powers scalable AI applications for:
- Conversation
- Search
- Advanced reasoning

It ensures high-performance across diverse languages, domains, and applications.

## Sutra Starter Guide

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1j7B8mDIU8KMZ_IB-oaL_qLqXmWYYh0Xu)

## Get Your API Key

Get your API key by visiting [TWO AI's SUTRA API page](https://www.two.ai/sutra/api).

⚠️ **Security Note:** Keep your API key secure! Never expose it in client-side code or public repositories.

### API Endpoint

```
https://api.two.ai/v2/chat/completions
```

## Quick Start

### Sample Code

#### cURL

```bash
curl -X POST "https://api.two.ai/v2/chat/completions" \
  -H "Authorization: Bearer $SUTRA_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Accept text/event-stream" \
  -d '{
  "model": "sutra-v2",
  "messages": [
    {"role": "user", "content": "मुझे मंगल ग्रह के बारे में 5 पैराग्राफ दीजिए"}
  ]
}'
```

#### Python

```python
import os
from openai import OpenAI

url = 'https://api.two.ai/v2'

client = OpenAI(base_url=url,
                api_key=os.environ.get("SUTRA_API_KEY"))

response = client.chat.completions.create(
    model='sutra-v2',
    messages=[{"role": "user", "content": "मुझे मंगल ग्रह के बारे में 5 पैराग्राफ दीजिए"}],
    max_tokens=1024,
    temperature=0
)

print(response.choices[0].message.content)
```

#### JavaScript/Node.js

```javascript
import { OpenAI } from 'openai';

async function testSutra() {
    const url = 'https://api.two.ai/v2';

    const client = new OpenAI({
        apiKey: process.env.SUTRA_API_KEY,
        baseURL: url,
    })

    const response = await client.chat.completions.create(
        {
            model: 'sutra-v2',
            messages: [{ role: 'user', content: 'मुझे मंगल ग्रह के बारे में 5 पैराग्राफ दीजिए' }],
            max_tokens: 1024,
            temperature: 0
        }
    );

    console.log(response.choices[0].message.content);
}

(async () => { 
    await testSutra(); 
    process.exit(0); 
})();
```

## Features

- **Multilingual Support**: Built-in support for 50+ languages
- **OpenAI-compatible API**: Easy integration with existing OpenAI-based applications
- **Dual-transformer Architecture**: Combines the power of MoE and Dense AI approaches
- **High Performance**: Optimized for various use cases and domains
- **Streaming Support**: Real-time response streaming capabilities

## Repository Structure

This repository is organized into the following sections:

1. **getting-started** - Introductory materials and examples to help you get started with Sutra
2. **integrations** - Examples and guides for integrating Sutra with other tools and services
3. **starter-apps** - Ready-to-use starter applications built with Sutra
4. **agents** - Examples and tutorials for building and deploying agents using Sutra
5. **usecases** - Real-world use case implementations across various industries
6. **rag** - Examples and best practices for implementing Retrieval-Augmented Generation
7. **images** - Images used throughout the documentation

Each directory contains its own README with more detailed information.

## Resources

- [API Reference](https://docs.two.ai/version-2/docs/get-started-with-sutra)
- [SUTRA Tokenizer on Hugging Face](https://huggingface.co/spaces/TWO/sutra-tokenizer-comparison)
- [Sample Applications](https://github.com/sutra-dev)

## Getting Support

- Follow [@two_platforms](https://twitter.com/two_platforms) on Twitter for updates
- Visit [TWO AI's website](https://www.two.ai) for more information

## Contributing

We welcome contributions to the SUTRA Cookbooks repository! Here's how you can contribute:

### How to Contribute

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/Sutra_Cookbooks.git
   ```

3. **Create a Branch**: Create a new branch for your contribution.
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**: Add or modify content according to our guidelines.

5. **Test Your Changes**: Ensure your code examples work as expected and notebooks run without errors.

6. **Submit a Pull Request**: Push your changes to your fork and submit a pull request to the main repository.

### Contribution Guidelines

- **Documentation**: All code examples should be well-documented with clear explanations.
- **Notebooks**: Jupyter notebooks should include markdown cells explaining the purpose and functionality of code cells.
- **Code Quality**: Ensure your code follows best practices and is properly formatted.
- **Examples**: Include practical examples that demonstrate real-world applications of SUTRA.
- **Languages**: We encourage examples in multiple languages to showcase SUTRA's multilingual capabilities.

### Areas for Contribution

- New use cases and applications
- Integration examples with other tools and frameworks
- Improvements to existing examples
- Documentation enhancements
- Bug fixes and optimizations

For major changes, please open an issue first to discuss what you would like to change.

## Legal

- [Privacy Policy](https://two.ai/legal/privacy)
- [Terms of Service](https://two.ai/legal/terms)

---

 2025 TWO AI | All Rights Reserved
