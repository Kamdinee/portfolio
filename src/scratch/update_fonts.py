import os

css_files = [
    "styles/Veilles.css",
    "styles/Projects.css",
    "styles/NavBar.css",
    "styles/Intro.css",
    "styles/Experience.css",
    "styles/EpreuveE5.css",
    "App.css",
]

for file in css_files:
    path = os.path.join(os.getcwd(), file)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = content.replace('"Manrope", sans-serif', 'var(--font-main)')
        content = content.replace("'Manrope', sans-serif", 'var(--font-main)')
        content = content.replace('"Noto Serif Display", serif', 'var(--font-title)')
        content = content.replace("'Noto Serif Display', serif", 'var(--font-title)')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
