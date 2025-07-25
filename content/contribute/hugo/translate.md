---
title: "Translate the Website"
weight: 100
draft: false
summary: "Step-by-step instructions for translating lczero.org to new languages"
---

### 1. Configure the Language
1. Open `config.toml` in the root directory
2. Locate the `[languages]` section
3. Add your language following the existing pattern:
   ```toml
   [languages.xx]  # Replace 'xx' with language code
   weight = 2      # Display order (1=English)
   languageName = "Language Name"
   ```

> [!NOTE] Language Codes
> Always use [ISO 639-1 standards](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for 
language codes (e.g., `es` for Spanish, `fr` for French, `de` for German). 

### 2. Translate UI Strings
1. Duplicate the English UI file: Copy `i18n/en.toml` and rename it using the language code the new 
language. For example, for Spanish, you'd create `i18n/es.toml`.
2. Translate all strings in the new file


### 3. Translate Content Pages
For each page you want to translate:
1. Create a copy with the language code suffix:  
   `original.md` to `original.[lang-code].md`  
   (Example: `troubleshoot.md` to`troubleshoot.es.md`)
2. Open the new, language-specific file and translate:
  - All front matter values (title, summary, etc.)
  - Page content (Markdown text)

### 4. Mark Machine Translations (Optional)
If using automated translation tools, add to the page's front matter:
```yaml
machineTranslated: true
```

### Important Considerations

> [!TIP] Fallback Behavior
> If a specific page is not translated into a user's selected language, the left sidebar will 
redirect to the English version.

> [!CAUTION] Broken References
> Be mindful that internal links or cross-references within a translated page cannot refer to a 
default language page using a `<ref "relPageLink">`. It must refer to a translated version. 

> [!IMPORTANT] Translated Index Pages
> The top-level `_index.md` file within each main content section (e.g., `content/play/_index.md`, 
`content/dev/_index.md`) **must** have a translated copy for every language enabled in that 
category. These index files define the section's behavior and content listings for each language.
