# lczero.org Website


## Building for development

To build and serve this Hugo website locally, follow these steps:

### Prerequisites
1. Install Hugo (extended version recommended)  
   - [Official Hugo installation guide](https://gohugo.io/installation/)

### Running Locally
1. Clone this repository
   ```sh
   git clone https://github.com/LeelaChessZero/lczero.org.git
   cd lczero.org
   ```
2. Start the development server:
   ```sh
   hugo serve
   ```
3. Open your browser to:  
   [http://localhost:1313](http://localhost:1313)

### Additional Notes
- Use `hugo serve -D` to include draft content


## Adding a New Language Translation

### 1. Configure the Language
Add the new language to `config.toml` file under the `[languages]` section.

### 2. Translate UI Strings
1. Duplicate `i18n/en.toml` to `i18n/[new-language-code].toml`  
   (Example: `i18n/es.toml` for Spanish)
2. Translate all strings in the new file

### 3. Translate Content Pages
For each page you want to translate:
1. Create a copy with the language code suffix:  
   `original.md` to `original.[lang-code].md`  
   (Example: `troubleshoot.md` to`troubleshoot.es.md`)
2. Translate all content in the new file

### 4. Mark Machine Translations (Optional)
If using AI/automated translation, add this to the page's front matter:
```yaml
machineTranslated: true
```

### Notes
- Language codes should follow [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standards
- Untranslated pages will fall back to English
- Some reference inside the page will break if that reference is also not translated.
- The top level `_index.md` inside each first section (play, blog, dev, etc) must have a translated copy for all languages present in that category.
