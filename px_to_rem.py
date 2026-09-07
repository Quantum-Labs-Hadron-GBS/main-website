import os
import re

def px_to_rem(match):
    val = float(match.group(1))
    # Don't convert 1px, 2px, 3px, 4px (usually borders, tiny shadows, outlines)
    if val <= 4:
        return f"{int(val)}px"
    
    # Convert to rem
    rem_val = val / 16.0
    # Format to remove trailing zeros
    return f"{rem_val:g}rem"

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Regex to find Npx or N.Npx
    # Negative lookbehind to avoid converting things inside calc() if we want, but let's just do all raw px
    # We should avoid replacing px in comments, but standard regex is fine for CSS
    new_content = re.sub(r'\b(\d+(?:\.\d+)?)px\b', px_to_rem, content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    target_dir = './src'
    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if file.endswith('.module.css') or file == 'globals.css':
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
