
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Save, FileText, Upload, Info } from 'lucide-react';
import { toast } from 'sonner';
import { FileUploader } from './FileUploader';

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

interface BlogEditorProps {
  onSave: (post: BlogPost) => void;
  editingPost?: BlogPost | null;
}

export const BlogEditor = ({ onSave, editingPost }: BlogEditorProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [tags, setTags] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
      setSeoTitle(editingPost.seoTitle || '');
      setSeoDescription(editingPost.seoDescription || '');
      setTags(editingPost.tags?.join(', ') || '');
    }
  }, [editingPost]);

  // ... keep existing code (parseContent and formatInlineText functions)

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in both title and content');
      return;
    }

    const post: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title,
      content,
      preview: content.substring(0, 150) + '...',
      createdAt: editingPost?.createdAt || new Date().toISOString(),
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || content.substring(0, 160),
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    onSave(post);
    
    if (!editingPost) {
      setTitle('');
      setContent('');
      setSeoTitle('');
      setSeoDescription('');
      setTags('');
    }
    
    toast.success(editingPost ? 'Preview post updated!' : 'Preview post created!');
  };

  const handleFileProcessed = (post: BlogPost) => {
    onSave(post);
  };

  const exampleFormat = `# Main Heading
## Sub Heading
### Smaller Heading

This is normal text with **bold text** and *italic text*.

> This is a note/quote block

\`inline code\` example

\`\`\`
// Code block
function example() {
  return "Hello World";
}
\`\`\`

![Image Alt Text](https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop)

- List item 1
- List item 2
- List item 3`;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Info banner */}
      <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-200">
            <p className="font-medium mb-1">Preview Mode</p>
            <p className="text-blue-300/80">
              This is for testing how your blog post will look. To publish posts permanently, 
              add them to <code className="bg-blue-500/20 px-1 rounded">src/data/blogPosts.ts</code>
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="write" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-800">
          <TabsTrigger value="write" className="data-[state=active]:bg-slate-700">
            <FileText className="h-4 w-4 mr-2" />
            Write Post
          </TabsTrigger>
          <TabsTrigger value="upload" className="data-[state=active]:bg-slate-700">
            <Upload className="h-4 w-4 mr-2" />
            Upload File
          </TabsTrigger>
        </TabsList>

        <TabsContent value="write" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Editor Side */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Test Your Post Format
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
                
                <Textarea
                  placeholder={`Write your content using this format:\n\n${exampleFormat}`}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white min-h-[400px] font-mono text-sm"
                />
                
                {/* SEO Fields */}
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-white font-medium mb-2">SEO Settings</h4>
                  <Input
                    placeholder="SEO Title (optional)"
                    value={seoTitle}
                    onChange={(e) => setSeoTitle(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white mb-2"
                  />
                  <Textarea
                    placeholder="SEO Description (optional)"
                    value={seoDescription}
                    onChange={(e) => setSeoDescription(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white mb-2 min-h-[80px]"
                  />
                  <Input
                    placeholder="Tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="flex-1">
                    <Save className="h-4 w-4 mr-2" />
                    {editingPost ? 'Update' : 'Create'} Preview
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowPreview(!showPreview)}
                    className="border-slate-600"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview Side */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  {title && <h1 className="text-3xl font-bold mb-6 text-white">{title}</h1>}
                  <div 
                    dangerouslySetInnerHTML={{ __html: parseContent(content) }}
                    className="space-y-4"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upload" className="mt-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Files for Preview
              </CardTitle
            </CardHeader>
            <CardContent>
              <FileUploader onFileProcessed={handleFileProcessed} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
