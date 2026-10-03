#!/bin/bash

. "$PWD/lib/utils.sh"

require_cmd pnpm

SHADCN_DIR="$PWD/app/_shadcn"
SHADCN_CONFIG="$PWD/components.json"

require_file "$SHADCN_DIR"

for file in "$SHADCN_DIR"/*.tsx; do
  [ -e "$file" ] || continue

  name=$(basename "$file" .tsx)

  echo
  echo "> pnx shadcn@latest add -y -o \"$name\""
  pnx shadcn@latest add -y -o "$name" && continue

  if [ -f "$SHADCN_CONFIG" ]; then
    for reg in $(jq -r '.registries | keys[]' "$SHADCN_CONFIG" 2>/dev/null); do
      echo
      echo "> pnx shadcn@latest add -y -o \"$reg/$name\""
      pnx shadcn@latest add -y -o "$reg/$name" && break
    done
  fi
done