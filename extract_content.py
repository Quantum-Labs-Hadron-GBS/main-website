import os
import re

base_dir = "src/app"
output_file = "README.md"

def extract_text(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    text_blocks = []
    
    # Remove imports to avoid noisy strings
    content = re.sub(r'import\s+.*?;\n', '', content, flags=re.DOTALL)
    
    # Extract strings from arrays/objects (like title: "...", desc: "...")
    # This matches "Text" or 'Text' or `Text`
    strings = re.findall(r'(["\'`])(.*?)\1', content, flags=re.DOTALL)
    for _, s in strings:
        s = s.strip().replace('\n', ' ')
        s = re.sub(r'\s+', ' ', s)
        # Heuristic: keep if it's > 5 chars, contains spaces, doesn't look like code/urls
        if len(s) > 5 and ' ' in s and not s.startswith('http') and not s.startswith('/'):
            # Avoid CSS classes or standard code snippets
            if not re.match(r'^[a-z\-0-9 ]+$', s) and not '{' in s and not '}' in s:
                if s not in text_blocks:
                    text_blocks.append(s)
                    
    # Extract JSX text: >Text<
    jsx_texts = re.findall(r'>\s*([^<{}]+?)\s*<', content)
    for t in jsx_texts:
        t = t.strip().replace('\n', ' ')
        t = re.sub(r'\s+', ' ', t)
        if len(t) > 2 and not re.match(r'^[_\W0-9]+$', t):
            if t not in text_blocks:
                text_blocks.append(t)
                
    return text_blocks

with open(output_file, 'w', encoding='utf-8') as out:
    out.write("# Website Content Export\n\n")
    out.write("This file contains an automated export of the text content across all pages in the website.\n\n")
    
    for root, dirs, files in sorted(os.walk(base_dir)):
        if 'page.tsx' in files:
            file_path = os.path.join(root, 'page.tsx')
            # Determine route
            route = file_path.replace('src/app', '').replace('/page.tsx', '')
            if route == '':
                route = '/'
                
            text_blocks = extract_text(file_path)
            
            if text_blocks:
                out.write(f"## {route}\n\n")
                for block in text_blocks:
                    out.write(f"- {block}\n")
                out.write("\n")
                
print("Export complete.")
