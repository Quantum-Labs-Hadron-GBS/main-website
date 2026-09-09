import os

template = """\"use client\";

import React from \"react\";
import ServiceLayout from \"{relative_path}/components/ServiceLayout\"; // Update relative path as needed
import Navbar from \"{relative_path}/components/Navbar/Navbar\";
import Footer from \"{relative_path}/components/Footer/Footer\";
import CtaSection from \"{relative_path}/components/CtaSection/CtaSection\";
import styles from \"{relative_path}/services/ServiceLayout.module.css\";

export default function Page() {{
  return (
    <>
      <Navbar />
      <main className={{styles.main}}>
        <section className={{styles.heroBanner}}>
          <div className={{styles.heroOverlay}}></div>
          <div className={{`${{styles.container}} ${{styles.heroContent}}`}}>
            <h1 className={{styles.heroTitle}}>{title}</h1>
            <p className={{styles.heroSubtitle}}>This section is currently being optimized as part of our new AI-First strategy.</p>
          </div>
        </section>
      </main>
      <CtaSection title=\"Ready to transform?\" subtitle=\"Contact us to get started.\" />
      <Footer />
    </>
  );
}}
"""

routes = [
    "/ai",
    "/ai/generative-ai",
    "/ai/agentic-ai",
    "/ai/ai-enterprise-operations",
    "/ai/ai-enterprise-platforms",
    "/ai/ai-strategy",
    "/ai/responsible-ai",
    "/solutions/ai-powered-enterprise-transformation",
    "/sectors/manufacturing",
    "/sectors/financial-services",
    "/sectors/retail",
    "/sectors/government-and-public-sector",
    "/sectors/education",
    "/why-hadron/our-approach",
    "/resources/insights",
    "/resources/webinars",
    "/resources/learning-center"
]

for route in routes:
    dir_path = f"src/app{route}"
    os.makedirs(dir_path, exist_ok=True)
    file_path = os.path.join(dir_path, "page.tsx")
    
    # Calculate relative path to src/app based on depth
    depth = len(route.strip('/').split('/'))
    rel_path = '../' * depth
    if rel_path.endswith('/'):
        rel_path = rel_path[:-1]
    
    title = route.split('/')[-1].replace('-', ' ').title()
    if route == "/ai": title = "AI & Automation"
    
    with open(file_path, "w") as f:
        f.write(template.format(relative_path=rel_path, title=title))
        
print("Scaffolded new pages.")
