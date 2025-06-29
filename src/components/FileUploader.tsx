
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Code, File } from 'lucide-react';
import { toast } from 'sonner';
import { parseFileContent } from '@/utils/fileParser';

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

interface FileUploaderProps {
  onFileProcessed: (post: BlogPost) => void;
}

export const FileUploader = ({ onFileProcessed }: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    try {
      const content = await readFileContent(file);
      const parsed = parseFileContent(file, content);
      
      const post: BlogPost = {
        id: Date.now().toString(),
        title: parsed.title || file.name,
        content: parsed.html,
        preview: parsed.preview || 'Uploaded file content',
        createdAt: new Date().toISOString(),
        seoTitle: parsed.seoTitle,
        seoDescription: parsed.seoDescription,
        tags: parsed.tags
      };

      onFileProcessed(post);
      toast.success(`File "${file.name}" uploaded successfully!`);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      toast.error('Failed to read file content');
      console.error('File upload error:', error);
    }
  };

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'html':
      case 'css':
      case 'js':
      case 'jsx':
      case 'ts':
      case 'tsx':
        return <Code className="h-5 w-5" />;
      case 'md':
        return <FileText className="h-5 w-5" />;
      default:
        return <File className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
        <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white mb-2">Upload Code File</h3>
        <p className="text-slate-400 mb-4">
          Upload HTML, CSS, JS, MD, or TXT files to create blog posts
        </p>
        <Button onClick={() => fileInputRef.current?.click()}>
          <Upload className="h-4 w-4 mr-2" />
          Choose File
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".html,.css,.js,.jsx,.ts,.tsx,.md,.txt"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
      
      <div className="text-sm text-slate-400">
        <p><strong>Supported formats:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>HTML files - Direct rendering with SEO extraction</li>
          <li>CSS files - Syntax highlighted display</li>
          <li>JavaScript/TypeScript - Syntax highlighted code</li>
          <li>Markdown - Converted to styled HTML</li>
          <li>Text files - Formatted plain text</li>
        </ul>
      </div>
    </div>
  );
};
