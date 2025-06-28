
import React from 'react';
import { ExternalLink, ArrowLeft, BookOpen, PenTool, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ScrollToTop } from '@/components/ScrollToTop';

const Blog = () => {
  const blogPlatforms = [
    {
      name: "Medium",
      description: "Technical articles on platform engineering, DevOps, and cloud architecture",
      url: "https://medium.com/@yourprofile",
      icon: <PenTool className="h-6 w-6" />,
      posts: 25,
      followers: "1.2K"
    },
    {
      name: "Hashnode",
      description: "In-depth tutorials and guides on modern development practices",
      url: "https://hashnode.com/@yourprofile",
      icon: <BookOpen className="h-6 w-6" />,
      posts: 18,
      followers: "856"
    },
    {
      name: "Dev.to",
      description: "Community discussions and quick tips for developers",
      url: "https://dev.to/yourprofile",
      icon: <Rss className="h-6 w-6" />,
      posts: 32,
      followers: "2.1K"
    }
  ];

  const featuredPosts = [
    {
      title: "Building Scalable Microservices with Kubernetes",
      platform: "Medium",
      readTime: "8 min read",
      views: "2.3K",
      url: "#"
    },
    {
      title: "DevSecOps: Security as Code Implementation Guide",
      platform: "Hashnode",
      readTime: "12 min read",
      views: "1.8K",
      url: "#"
    },
    {
      title: "Infrastructure as Code Best Practices with Terraform",
      platform: "Dev.to",
      readTime: "6 min read",
      views: "3.1K",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Blog & Articles
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Sharing knowledge through technical articles, tutorials, and insights on modern software development
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Blog Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Where I Write</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white mr-4">
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {platform.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{platform.posts} posts</span>
                      <span>{platform.followers} followers</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 mb-4">{platform.description}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="mr-2">Visit Platform</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-xs border border-blue-400/30">
                    {post.platform}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{post.readTime}</span>
                  <span>{post.views} views</span>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors mt-4">
                  <span className="mr-2">Read Article</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      
      <ScrollToTop />
    </div>
  );
};

export default Blog;
