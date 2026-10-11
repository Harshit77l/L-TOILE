#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

# Start Strapi in the background
cd "$ROOT/backend"
npm run develop &
BACKEND_PID=$!

# Wait until the API is listening
for _ in $(seq 1 90); do
  if curl -sf http://127.0.0.1:1337/_health >/dev/null 2>&1; then
    break
  fi
  if curl -sf http://127.0.0.1:1337/api/items >/dev/null 2>&1; then
    break
  fi
  sleep 2
done

# Start Next.js on the preview port
cd "$ROOT"
npm run dev -- --hostname 0.0.0.0 --port 3000

trap "kill $BACKEND_PID" EXIT
