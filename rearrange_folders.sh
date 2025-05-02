#!/bin/bash

# Script to rearrange folders in Sutra_Cookbooks according to specified order
# Order: 1. getting-started, 2. integrations, 3. starter-apps, 4. agents, 5. usecases, 6. rag, 7. images

# Navigate to the parent directory
cd "$(dirname "$0")"

# Create a temporary directory for the rearrangement
mkdir -p temp_structure

# Create directories in the desired order
mkdir -p temp_structure/getting-started
mkdir -p temp_structure/integrations
mkdir -p temp_structure/starter-apps
mkdir -p temp_structure/agents
mkdir -p temp_structure/usecases
mkdir -p temp_structure/rag
mkdir -p temp_structure/images

# Copy contents from original directories to the temp structure
echo "Copying files to temporary structure..."
cp -r getting-started/* temp_structure/getting-started/ 2>/dev/null
cp -r integrations/* temp_structure/integrations/ 2>/dev/null
cp -r starter-apps/* temp_structure/starter-apps/ 2>/dev/null
cp -r agents/* temp_structure/agents/ 2>/dev/null
cp -r usecases/* temp_structure/usecases/ 2>/dev/null
cp -r rag/* temp_structure/rag/ 2>/dev/null
cp -r images/* temp_structure/images/ 2>/dev/null

# Remove original directories (excluding .git and the script itself)
echo "Removing original directories..."
for dir in getting-started integrations starter-apps agents usecases rag images; do
  if [ -d "$dir" ]; then
    rm -rf "$dir"
  fi
done

# Move the contents from temp structure back to the main directory
echo "Moving directories back in the correct order..."
mv temp_structure/getting-started ./getting-started
mv temp_structure/integrations ./integrations
mv temp_structure/starter-apps ./starter-apps
mv temp_structure/agents ./agents
mv temp_structure/usecases ./usecases
mv temp_structure/rag ./rag
mv temp_structure/images ./images

# Remove the temporary directory
rm -rf temp_structure

echo "Folder rearrangement complete!"
echo "New folder order:"
echo "1. getting-started"
echo "2. integrations"
echo "3. starter-apps"
echo "4. agents"
echo "5. usecases"
echo "6. rag"
echo "7. images"
