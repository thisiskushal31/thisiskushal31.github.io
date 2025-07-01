
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import LinkableHeading from '@/components/LinkableHeading';
import MarkdownViewer from '@/components/MarkdownViewer';
import { portfolioConfig } from '@/config/portfolio';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  
  const categories = ['All', 'DevOps', 'DevSecOps', 'Platform Engineering', 'Software Engineering'];

  const filteredPosts = selectedCategory === 'All' 
    ? portfolioConfig.blogPosts 
    : portfolioConfig.blogPosts.filter(post => post.category === selectedCategory);

  const currentPost = selectedPost 
    ? portfolioConfig.blogPosts.find(post => post.slug === selectedPost)
    : null;

  if (currentPost) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedPost(null)}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentPost.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{currentPost.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(currentPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {currentPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="tech-badge">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <MarkdownViewer content={currentPost.content} />
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <LinkableHeading level={1} id="technical-blog" className="text-4xl md:text-5xl font-bold mb-4">
            Technical Blog
          </LinkableHeading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and best practices from the world of DevOps and Cloud Engineering
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.filter(post => post.featured).map((post, index) => (
          <Card key={post.title} className="mb-12 card-hover animate-fade-in">
            <CardHeader>
              <Badge className="w-fit mb-2">Featured</Badge>
              <CardTitle className="text-2xl md:text-3xl mb-2">{post.title}</CardTitle>
              <p className="text-lg text-muted-foreground">{post.subtitle}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="tech-badge">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button onClick={() => setSelectedPost(post.slug)}>
                Read Full Article
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={post.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setSelectedPost(post.slug)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found in the {selectedCategory} category.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <LinkableHeading level={3} id="newsletter" className="text-2xl font-semibold mb-4">
                Stay Updated
              </LinkableHeading>
              <p className="text-muted-foreground mb-6">
                Get the latest DevOps insights, tutorials, and industry updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
