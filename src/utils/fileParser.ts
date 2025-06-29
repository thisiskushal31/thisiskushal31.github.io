
export interface ParsedContent {
  html: string;
  title?: string;
  preview?: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
}

export const parseFileContent = (file: File, content: string): ParsedContent => {
  const fileName = file.name;
  const fileExtension = fileName.split('.').pop()?.toLowerCase();

  switch (fileExtension) {
    case 'html':
      return parseHTMLFile(content, fileName);
    case 'css':
      return parseCSSFile(content, fileName);
    case 'js':
    case 'jsx':
    case 'ts':
    case 'tsx':
      return parseJSFile(content, fileName);
    case 'md':
      return parseMarkdownFile(content, fileName);
    case 'txt':
      return parseTextFile(content, fileName);
    default:
      return parseTextFile(content, fileName);
  }
};

const parseHTMLFile = (content: string, fileName: string): ParsedContent => {
  // Extract title from HTML
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : fileName.replace('.html', '');
  
  // Extract meta description
  const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const seoDescription = metaDescMatch ? metaDescMatch[1] : '';
  
  // Extract body content for preview
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : content;
  const textContent = bodyContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const preview = textContent.substring(0, 150) + '...';

  return {
    html: content,
    title,
    preview,
    seoTitle: title,
    seoDescription,
    tags: ['html', 'web']
  };
};

const parseCSSFile = (content: string, fileName: string): ParsedContent => {
  const title = fileName.replace('.css', '') + ' - CSS Styles';
  const preview = 'CSS stylesheet containing styles and animations';
  
  const html = `
    <div class="code-file-viewer">
      <h1 class="text-3xl font-bold mb-4 text-white">${title}</h1>
      <pre class="bg-slate-800 text-green-400 p-4 rounded-lg overflow-x-auto"><code>${escapeHtml(content)}</code></pre>
    </div>
  `;

  return {
    html,
    title,
    preview,
    seoTitle: title,
    seoDescription: preview,
    tags: ['css', 'styles']
  };
};

const parseJSFile = (content: string, fileName: string): ParsedContent => {
  const title = fileName + ' - JavaScript Code';
  const preview = 'JavaScript code file with functions and logic';
  
  const html = `
    <div class="code-file-viewer">
      <h1 class="text-3xl font-bold mb-4 text-white">${title}</h1>
      <pre class="bg-slate-800 text-green-400 p-4 rounded-lg overflow-x-auto"><code>${escapeHtml(content)}</code></pre>
    </div>
  `;

  return {
    html,
    title,
    preview,
    seoTitle: title,
    seoDescription: preview,
    tags: ['javascript', 'code']
  };
};

const parseMarkdownFile = (content: string, fileName: string): ParsedContent => {
  const title = fileName.replace('.md', '');
  const textContent = content.replace(/[#*`>]/g, '').replace(/\s+/g, ' ').trim();
  const preview = textContent.substring(0, 150) + '...';
  
  // Convert markdown to HTML (basic conversion)
  const html = convertMarkdownToHTML(content);

  return {
    html,
    title,
    preview,
    seoTitle: title,
    seoDescription: preview,
    tags: ['markdown', 'documentation']
  };
};

const parseTextFile = (content: string, fileName: string): ParsedContent => {
  const title = fileName.replace('.txt', '');
  const preview = content.substring(0, 150) + '...';
  
  const html = `
    <div class="text-file-viewer">
      <h1 class="text-3xl font-bold mb-4 text-white">${title}</h1>
      <pre class="text-slate-300 whitespace-pre-wrap">${escapeHtml(content)}</pre>
    </div>
  `;

  return {
    html,
    title,
    preview,
    seoTitle: title,
    seoDescription: preview,
    tags: ['text', 'document']
  };
};

const convertMarkdownToHTML = (markdown: string): string => {
  return markdown
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 text-white">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 text-blue-400">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2 text-teal-400">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-blue-300">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-700 text-green-300 px-2 py-1 rounded">$1</code>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-800 text-green-400 p-4 rounded-lg my-4 overflow-x-auto"><code>$1</code></pre>')
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 my-4 text-slate-300 italic">$1</blockquote>')
    .replace(/^- (.*$)/gim, '<li class="text-slate-300 mb-1">$1</li>')
    .replace(/\n/g, '<br>');
};

const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};
