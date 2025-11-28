'use client';

import { use, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  featured: boolean;
  published: boolean;
  created_at: string;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      // Fetch all posts
      const response = await fetch('/api/admin/blog');
      if (response.ok) {
        const data = await response.json();
        const publishedPosts = data.posts.filter((p: BlogPost) => p.published);
        
        // Find the current post
        const currentPost = publishedPosts.find((p: BlogPost) => p.slug === slug);
        
        if (!currentPost) {
          notFound();
          return;
        }
        
        setPost(currentPost);
        
        // Find related posts (same category, max 3)
        const related = publishedPosts
          .filter((p: BlogPost) => p.id !== currentPost.id && p.category === currentPost.category)
          .slice(0, 3);
        
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-[#0A1236] pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A1236] dark:border-white"></div>
      </main>
    );
  }

  if (!post) {
    notFound();
    return null;
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A1236] pt-24">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#0A1236] dark:hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-medium mb-4">
              {post.category}
            </span>
          </div>

          <h1 className="font-outfit text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[500px] rounded-3xl overflow-hidden mb-12"
        >
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </motion.div>

        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 dark:border-gray-700 pt-16"
          >
            <h2 className="font-outfit text-3xl font-light text-gray-900 dark:text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image_url}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-outfit text-lg font-medium text-gray-900 dark:text-white group-hover:text-[#0A1236] dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {new Date(relatedPost.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </main>
  );
}