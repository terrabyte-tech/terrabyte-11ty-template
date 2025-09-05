#!/bin/bash

# Bump version
npm version patch

# Sync version to site.json
npm run sync-version

# Stage and commit updated site.json
git add _data/site.json
git commit -m "chore: sync site.json with package version"

# Push commit and tag
git push && git push --tags

echo "Template version bumped and synced; ready to release!"
