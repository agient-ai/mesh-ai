
# Local AI Plugin

This is a stripped-down version of the original here: https://github.com/chasebank87/mesh-ai and only supports Ollama


# Table of Contents
- [Mesh AI](#mesh-ai)
- [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Compatibility](#compatibility)
    - [Under Development](#under-development)
  - [Differences from Official Fabric Plugin](#differences-from-official-fabric-plugin)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

This plugin emulates the functionality provided by the [Fabric tool](https://github.com/danielmiessler/fabric) within your Obsidian vault. This plugin allows users to run and manage multiple text processing patterns on their notes, the clipboard, or Tavily search results. It integrates with your privately hosted LLM services and platforms to enhance your productivity within Obsidian.

## Features

- **Process Active Note, Clipboard, or Tavily Search Results:** The plugin allows you to apply patterns to the currently active note, clipboard content, or results from Tavily search.
  
- **Pattern Processing:**
  - **Sequential Mode (Default):** Process multiple patterns in order, where the output of the first pattern is used as the input for the next.
  - **Pattern Stitch Mode:** Process multiple patterns and output the results of each pattern collectively.

- **YouTube Link Detection:** Automatically detects YouTube links, fetches their transcripts, and uses the transcripts as a source input for processing.

- **Workflow Creation:** Create workflows from the settings view, which can then be added as command palette items for quick access.

- **Pattern Management:**
  - Download patterns from the Fabric repository.
  - Maintain a custom pattern folder to manage your own patterns.

- **AI Service Integration:** Utilize various major providers such as:
  - `ollama`

## Compatibility

Currently, the plugin has been tested and confirmed to work with:
- `Ollama`


## Installation


To install the plugin, follow these steps:
1. Download the latest release from the [GitHub repository](https://github.com/agient-ai/mesh-ai).
2. Extract the files into your Obsidian vault's `plugins` directory.
3. Enable the plugin from the Obsidian settings menu.


## Usage

1. Open the settings view within Obsidian and configure your local AI service provider e.g ollama.
2. Define your text processing patterns and workflows.
3. Use the command palette to apply your workflows to your notes, clipboard, or Tavily search results.
4. Use the Mesh AI Interface

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/agient-ai/mesh-ai/blob/main/LICENSE) file for details.

---