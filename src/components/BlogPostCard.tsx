
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Calendar, Tag, FileText } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  preview: string;
  createdAt: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  isFromFile?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
  onEdit: (post: BlogPost) => void;
  onDelete: (id: string) => void;
  onView: (post: BlogPost) => void;
  isMinature?: boolean;
}

export const BlogPostCard = ({ post, onEdit, onDelete, onView, isMinature = false }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isMinature) {
    return (
      <Card 
        className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all cursor-pointer relative"
        onClick={() => onView(post)}
      >
        {post.isFromFile && (
          <div className="absolute top-2 right-2 z-10" title="File-based post">
            <FileText className="h-3 w-3 text-blue-400" />
          </div>
        )}
        <CardContent className="p-4">
          <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-slate-400 text-xs mb-2 line-clamp-2">{post.preview}</p>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{formatDate(post.createdAt)}</span>
            {post.tags && post.tags.length > 0 && (
              <span className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {post.tags.length}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all relative">
      {post.isFromFile && (
        <div className="absolute top-3 right-3 z-10" title="File-based post">
          <FileText className="h-4 w-4 text-blue-400" />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle 
            className="text-white cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => onView(post)}
          >
            {post.title}
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(post)}
              className={`text-slate-400 ${post.isFromFile ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-400'}`}
              disabled={post.isFromFile}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(post.id)}
              className={`text-slate-400 ${post.isFromFile ? 'opacity-50 cursor-not-allowed' : 'hover:text-red-400'}`}
              disabled={post.isFromFile}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300 mb-4">{post.preview}</p>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <div className="flex gap-1">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-slate-500 text-xs">+{post.tags.length - 3}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
