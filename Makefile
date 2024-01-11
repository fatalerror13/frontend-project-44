.PHONY: brain-games
brain-games:
	node bin/brain-games.js

.PHONY: publish
publish:
	npm publish --dry-run