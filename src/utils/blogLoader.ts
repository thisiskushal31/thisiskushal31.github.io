
import { blogPostsData } from '@/data/blogPosts';
import { parseFileContent } from '@/utils/fileParser';

export interface BlogPost {
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

export const loadBlogPostsFromFiles = (): BlogPost[] => {
  return blogPostsData.map(postData => {
    // Create a mock file object for parsing
    const mockFile = new File([postData.content], postData.fileName, {
      type: 'text/markdown'
    });
    
    // Parse the content using existing parser
    const parsed = parseFileContent(mockFile, postData.content);
    
    return {
      id: postData.id,
      title: postData.title || parsed.title || 'Untitled Post',
      content: parsed.html,
      preview: postData.preview || parsed.preview || 'No preview available',
      createdAt: postData.createdAt + 'T00:00:00.000Z',
      seoTitle: postData.seoTitle || parsed.seoTitle,
      seoDescription: postData.seoDescription || parsed.seoDescription,
      tags: postData.tags || parsed.tags,
      isFromFile: true
    };
  });
};
