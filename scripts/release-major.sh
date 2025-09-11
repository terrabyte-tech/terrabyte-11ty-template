#!/bin/bash

# Bump version
npm version major

# Sync version to site.json
npm run sync-version

# Stage and commit updated site.json
git add _data/site.json
VERSION=$(node -p "require('./package.json').version")
git commit -m "chore(release): v$VERSION - sync site.json with package version"

# Tag the commit with the new version from package.json
git tag -a "v$VERSION" -m "$VERSION"

echo "Version bumped to v$VERSION, site.json synced, git tag created."
echo "Template ready to release!"