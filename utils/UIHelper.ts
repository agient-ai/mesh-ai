import { PluginSettings, ProviderName } from '../types';

export class UIHelper {
  private containerEl: HTMLElement;

  constructor(containerEl: HTMLElement) {
    this.containerEl = containerEl;
  }

  static createSelect(container: Element | HTMLElement, className: string, options: string[]): HTMLSelectElement {
    const select = (container instanceof HTMLElement ? container : container as HTMLElement).createEl('select', { cls: className }) as HTMLSelectElement;
    options.forEach(option => {
      select.createEl('option', { value: option, text: option });
    });
    return select;
  }

  createUI(settings: PluginSettings, handleLLMRequest: (provider: ProviderName, prompt: string) => Promise<void>) {
    this.containerEl.empty();
    this.containerEl.addClass('mesh-ai-container');

    const header = this.containerEl.createEl('h2', { text: 'Mesh AI' });

    const providerSelect = this.createProviderSelect(settings);
    const promptInput = this.createPromptInput();
    const submitButton = this.createSubmitButton();

    submitButton.addEventListener('click', () => {
      const selectedProvider = providerSelect.value as ProviderName;
      const prompt = promptInput.value;
      if (prompt) {
        handleLLMRequest(selectedProvider, prompt);
      }
    });

    const responseContainer = this.containerEl.createEl('div', { cls: 'mesh-ai-response' });

    return {
      updateResponse: (response: string) => {
        responseContainer.innerHTML = `<pre>${response}</pre>`;
      },
      showLoading: () => {
        responseContainer.innerHTML = '<div class="mesh-ai-loading">Processing...</div>';
      },
      hideLoading: () => {
        responseContainer.innerHTML = '';
      }
    };
  }

  private createProviderSelect(settings: PluginSettings): HTMLSelectElement {
    const selectContainer = this.containerEl.createEl('div', { cls: 'mesh-ai-select-container' });
    selectContainer.createEl('label', { text: 'Select Provider:', attr: { for: 'mesh-ai-provider' } });
    
    const select = selectContainer.createEl('select', { cls: 'mesh-ai-select', attr: { id: 'mesh-ai-provider' } });
    
    const providers: Array<{ value: ProviderName; label: string }> = [
      { value: 'openai', label: 'OpenAI' },
      { value: 'google', label: 'Google' },
      { value: 'microsoft', label: 'Microsoft' },
      { value: 'anthropic', label: 'Anthropic' },
      { value: 'grocq', label: 'Grocq' },
      { value: 'ollama', label: 'Ollama' }
    ];

    providers.forEach(provider => {
      const option = select.createEl('option', { value: provider.value, text: provider.label });
      if (this.isProviderConfigured(provider.value, settings)) {
        option.disabled = false;
      } else {
        option.disabled = true;
      }
    });

    return select;
  }

  private isProviderConfigured(provider: ProviderName, settings: PluginSettings): boolean {
    if (provider === 'ollama') {
      return !!settings.ollamaServerUrl;
    }
    return !!settings[`${provider}ApiKey` as keyof PluginSettings];
  }

  private createPromptInput(): HTMLTextAreaElement {
    const inputContainer = this.containerEl.createEl('div', { cls: 'mesh-ai-input-container' });
    inputContainer.createEl('label', { text: 'Enter your prompt:', attr: { for: 'mesh-ai-prompt' } });
    return inputContainer.createEl('textarea', { cls: 'mesh-ai-input', attr: { id: 'mesh-ai-prompt', rows: '4' } });
  }

  private createSubmitButton(): HTMLButtonElement {
    return this.containerEl.createEl('button', { cls: 'mesh-ai-submit', text: 'Submit' });
  }
}