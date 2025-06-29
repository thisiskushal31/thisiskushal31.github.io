
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Search, Grid, List, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { ScrollToTop } from '@/components/ScrollToTop';
import { BlogEditor } from '@/components/BlogEditor';
import { BlogPostCard } from '@/components/BlogPostCard';
import { BlogViewer } from '@/components/BlogViewer';
import { toast } from 'sonner';
import { loadBlogPostsFromFiles, BlogPost } from '@/utils/blogLoader';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentView, setCurrentView] = useState<'list' | 'editor' | 'viewer'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [viewingPost, setViewingPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'miniature'>('grid');

  // Load posts from localStorage and files on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    const userPosts = savedPosts ? JSON.parse(savedPosts) : [];
    const filePosts = loadBlogPostsFromFiles();
    
    // Combine posts from files and user-created posts
    const allPosts = [...filePosts, ...userPosts];
    setPosts(allPosts);
  }, []);

  // Save only user-created posts to localStorage whenever posts change
  useEffect(() => {
    const userPosts = posts.filter(post => !post.isFromFile);
    localStorage.setItem('blogPosts', JSON.stringify(userPosts));
  }, [posts]);

  const handleSavePost = (post: BlogPost) => {
    if (editingPost) {
      setPosts(posts.map(p => p.id === post.id ? post : p));
      setEditingPost(null);
    } else {
      setPosts([post, ...posts]);
    }
    setCurrentView('list');
  };

  const handleEditPost = (post: BlogPost) => {
    // Only allow editing of user-created posts, not file-based posts
    if (post.isFromFile) {
      toast.error('File-based posts cannot be edited directly. Edit the source file instead.');
      return;
    }
    setEditingPost(post);
    setCurrentView('editor');
  };

  const handleDeletePost = (id: string) => {
    const post = posts.find(p => p.id === id);
    if (post?.isFromFile) {
      toast.error('File-based posts cannot be deleted from here. Remove from source file instead.');
      return;
    }
    
    if (confirm('Are you sure you want to delete this preview post?')) {
      setPosts(posts.filter(p => p.id !== id));
      toast.success('Preview post deleted successfully');
    }
  };

  const handleViewPost = (post: BlogPost) => {
    setViewingPost(post);
    setCurrentView('viewer');
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (currentView === 'editor') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
          <div className="container mx-auto px-4 py-8">
            <Button 
              onClick={() => {
                setCurrentView('list');
                setEditingPost(null);
              }}
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Posts
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {editingPost ? 'Edit Preview Post' : 'Preview Post'}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Test how your blog post will look before adding it to the code files
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <BlogEditor onSave={handleSavePost} editingPost={editingPost} />
        </div>
        <ScrollToTop />
      </div>
    );
  }

  if (currentView === 'viewer' && viewingPost) {
    return <BlogViewer post={viewingPost} onBack={() => setCurrentView('list')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                My Blog
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl">
                Blog posts loaded from code files - add new posts by editing the source files
              </p>
            </div>
            {/* Subtle preview button for website manager */}
            <Button 
              onClick={() => setCurrentView('editor')} 
              variant="ghost"
              size="sm"
              className="shrink-0 text-slate-500 hover:text-slate-300 opacity-50 hover:opacity-100 transition-all"
              title="Preview how a post will look (for testing)"
            >
              <Eye className="mr-2 h-3 w-3" />
              Preview
            </Button>
          </div>

          {/* Search and View Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="border-slate-600"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'miniature' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('miniature')}
                className="border-slate-600"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {posts.length === 0 ? 'No posts yet' : 'No posts found'}
            </h3>
            <p className="text-slate-400 mb-8">
              {posts.length === 0 
                ? 'Add blog posts by editing the src/data/blogPosts.ts file' 
                : 'Try adjusting your search terms.'
              }
            </p>
          </div>
        ) : (
          <div className={
            viewMode === 'miniature' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          }>
            {filteredPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
                onView={handleViewPost}
                isMinature={viewMode === 'miniature'}
              />
            ))}
          </div>
        )}
      </div>
      
      <ScrollToTop />
    </div>
  );
};

export default Blog;
