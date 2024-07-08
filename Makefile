settings.js: api.js theme.css
	cat api.js > settings.js
	printf 'settings.theme = `\n\n' >> settings.js
	cat theme.css >> settings.js
	printf '`;' >> settings.js

format:
	prettier -w -l "*.{css,js}"

.PHONY: format
