#!/bin/bash

# Bump version
npm version major

# Sync version to site.json
npm run sync-version

# Stage and commit updated site.json
git add _data/site.json
git commit -m "chore: sync site.json with package version"

echo "Template version bumped and synced; ready to push release!"