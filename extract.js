const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'contents');
const docDir = path.join(outputDir, 'content_doc');
const mdDir = path.join(outputDir, 'content_md');

// Create directories
[outputDir, docDir, mdDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// A mapping of logical pages and their source files to crawl
const pages = {
    "Home": [
        "src/app/page.tsx",
        "src/app/components/HeroSection/HeroSection.tsx",
        "src/app/components/FeatureScroll/FeatureScrollSection.tsx",
        "src/app/components/WhyHadronSection/WhyHadronSection.tsx",
        "src/app/components/InteractiveBento/InteractiveBento.tsx",
        "src/app/components/CoreValuesSection/CoreValuesSection.tsx",
        "src/app/components/CoreServicesSection/CoreServicesSection.tsx",
        "src/app/components/AssetsOfExcellence/AssetsOfExcellenceSection.tsx",
        "src/app/components/LanguageScroll/LanguageScrollSection.tsx",
        "src/app/components/CtaSection/CtaSection.tsx"
    ],
    "About": ["src/app/about/page.tsx"],
    "Contact": ["src/app/contact/page.tsx", "src/app/components/ContactForm/ContactForm.tsx"],
    "Services Landing": ["src/app/services/page.tsx", "src/app/services/ServiceLayout.tsx"],
    "Solution - Enterprise Core": ["src/app/solutions/enterprise-core-transformation/page.tsx"],
    "Solution - Intelligent Automation": ["src/app/solutions/intelligent-automation-agentic-ai/page.tsx"],
    "Solution - Rapid Application": ["src/app/solutions/rapid-application-engineering/page.tsx"],
    "Solution - Unified Service": ["src/app/solutions/unified-service-experience-management/page.tsx"],
    "Solution - Cloud Adoption": ["src/app/solutions/cloud-adoption-and-cloud-first-engineering/page.tsx"],
    "Solution - Engineering Quality": ["src/app/solutions/engineering-quality-and-reliability/page.tsx"],
};

// Also scan all /services/**/page.tsx dynamically
const servicesDir = path.join(__dirname, 'src/app/services');
function getServicePages(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    items.forEach(item => {
        if (item.isDirectory()) {
            const pagePath = path.join(dir, item.name, 'page.tsx');
            if (fs.existsSync(pagePath)) {
                pages[`Service - ${item.name}`] = [pagePath];
            }
            // check subdirs (e.g. service-now/precision-bridge)
            const subDir = path.join(dir, item.name);
            const subItems = fs.readdirSync(subDir, { withFileTypes: true });
            subItems.forEach(sub => {
                if (sub.isDirectory()) {
                    const subPagePath = path.join(subDir, sub.name, 'page.tsx');
                    if (fs.existsSync(subPagePath)) {
                        pages[`Service - ${item.name} - ${sub.name}`] = [subPagePath];
                    }
                }
            })
        }
    });
}
if (fs.existsSync(servicesDir)) getServicePages(servicesDir);

let allImages = [];

function extractContentFromFiles(pageName, filePaths) {
    let rawTextContent = '';
    let links = new Set();
    let images = new Set();

    filePaths.forEach(fp => {
        const fullPath = path.join(__dirname, fp);
        if (!fs.existsSync(fullPath)) return;
        
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        // Extract images and videos
        const imgRegex = /src=["'](https:\/\/res\.cloudinary\.com[^"']+|[^"']+\.(png|jpg|jpeg|svg|webp|avif|mp4))["']/g;
        let imgMatch;
        while ((imgMatch = imgRegex.exec(content)) !== null) {
            images.add(imgMatch[1]);
            allImages.push(`- **${pageName}**: ${imgMatch[1]}`);
        }

        // Extract Links
        const linkRegex = /href=["']([^"']+)["']/g;
        let linkMatch;
        while ((linkMatch = linkRegex.exec(content)) !== null) {
            if (linkMatch[1] !== '#') links.add(linkMatch[1]);
        }

        // Extract Text from JSON-like object keys (title, desc, etc.)
        let allStrings = [];
        const quoteRegex = /(?:title|desc|label|p|subtitle|heading):\s*(["'`])([\s\S]*?)\1/g;
        let qMatch;
        while ((qMatch = quoteRegex.exec(content)) !== null) {
            allStrings.push(qMatch[2].trim());
        }

        // Extract Text inside JSX tags (>text<)
        const jsxTextRegex = />([^<]+)</g;
        let jsxMatch;
        while ((jsxMatch = jsxTextRegex.exec(content)) !== null) {
            let str = jsxMatch[1].trim();
            // Filter out obvious code / symbols
            if (str && str.length > 2 && !str.match(/^[{}();,.\s]+$/) && !str.includes('=>') && !str.includes('styles.')) {
                allStrings.push(str);
            }
        }

        if (allStrings.length > 0) {
            rawTextContent += `\n\n--- Source: ${fp} ---\n\n`;
            rawTextContent += allStrings.join('\n\n');
        }
    });

    const docName = pageName.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
    
    // 1. Create .txt for content_doc
    let txtOutput = `Page: ${pageName}\n\n`;
    txtOutput += `=== OUTGOING LINKS ===\n${Array.from(links).join('\n')}\n\n`;
    txtOutput += `=== IMAGES & MEDIA ===\n${Array.from(images).join('\n')}\n\n`;
    txtOutput += `=== TEXT CONTENT ===\n${rawTextContent}\n`;
    fs.writeFileSync(path.join(docDir, `${docName}.txt`), txtOutput);

    // 2. Create .md for content_md
    let mdOutput = `# Page: ${pageName}\n\n`;
    mdOutput += `## Outgoing Links\n`;
    Array.from(links).forEach(l => mdOutput += `- [${l}](${l})\n`);
    mdOutput += `\n## Images & Media\n`;
    Array.from(images).forEach(img => mdOutput += `- ${img}\n`);
    mdOutput += `\n## Text Content\n`;
    mdOutput += '```text\n' + rawTextContent + '\n```\n';
    fs.writeFileSync(path.join(mdDir, `${docName}.md`), mdOutput);
}

Object.keys(pages).forEach(pageName => {
    extractContentFromFiles(pageName, pages[pageName]);
});

// Write global images.md
const imagesMdContent = `# Global Media Assets\n\n${Array.from(new Set(allImages)).sort().join('\n')}\n`;
fs.writeFileSync(path.join(outputDir, 'images.md'), imagesMdContent);

console.log("Extraction complete!");
