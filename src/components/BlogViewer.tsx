
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  preview: string;
  createdAt: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
}

interface BlogViewerProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogViewer = ({ post, onBack }: BlogViewerProps) => {
  const parseContent = (text: string) => {
    const lines = text.split('\n');
    let html = '';
    let inCodeBlock = false;
    let codeContent = '';

    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          html += `<pre class="bg-slate-800 text-green-400 p-4 rounded-lg my-4 overflow-x-auto"><code>${codeContent}</code></pre>`;
          codeContent = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        continue;
      }

      if (trimmedLine.startsWith('# ')) {
        html += `<h1 class="text-3xl font-bold mb-4 text-white">${trimmedLine.substring(2)}</h1>`;
      } else if (trimmedLine.startsWith('## ')) {
        html += `<h2 class="text-2xl font-semibold mb-3 text-blue-400">${trimmedLine.substring(3)}</h2>`;
      } else if (trimmedLine.startsWith('### ')) {
        html += `<h3 class="text-xl font-medium mb-2 text-teal-400">${trimmedLine.substring(4)}</h3>`;
      } else if (trimmedLine.startsWith('> ')) {
        html += `<blockquote class="border-l-4 border-blue-500 pl-4 my-4 text-slate-300 italic">${trimmedLine.substring(2)}</blockquote>`;
      } else if (trimmedLine.startsWith('![')) {
        const match = trimmedLine.match(/!\[([^\]]*)\]\(([^)]+)\)/);
        if (match) {
          html += `<img src="${match[2]}" alt="${match[1]}" class="w-full rounded-lg my-4" />`;
        }
      } else if (trimmedLine.startsWith('- ')) {
        html += `<li class="text-slate-300 mb-1">${formatInlineText(trimmedLine.substring(2))}</li>`;
      } else if (trimmedLine) {
        html += `<p class="text-slate-300 mb-4 leading-relaxed">${formatInlineText(trimmedLine)}</p>`;
      }
    }

    return html;
  };

  const formatInlineText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-blue-300">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-slate-700 text-green-300 px-2 py-1 rounded">$1</code>');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // SEO Meta tags
  useEffect(() => {
    document.title = post.seoTitle || post.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', post.seoDescription || post.preview);

    // Update meta keywords
    if (post.tags && post.tags.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', post.tags.join(', '));
    }

    return () => {
      document.title = 'DevPortfolio';
    };
  }, [post]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-blue-400 hover:text-blue-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
          />
        </article>
      </div>
    </div>
  );
};
