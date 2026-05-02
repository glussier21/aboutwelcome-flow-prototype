#!/bin/bash
# Push your local changes to GitHub (and trigger a live deploy).
set -euo pipefail

cd "$(dirname "$0")"

git add -A
git diff --staged --quiet && { echo "Nothing to publish — no changes."; exit 0; }

echo "Changes to publish:"
git diff --staged --stat

read -rp "Commit message (press Enter for 'update prototype'): " MSG
MSG=${MSG:-"update prototype"}

git commit -m "$MSG"
git push
echo "Done! Your changes will be live in ~1 minute at your GitHub Pages URL."
