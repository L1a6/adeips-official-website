-- ============================================
-- SAMPLE DATA FOR DEVELOPMENT
-- ============================================

-- Sample enrollments (optional - for testing)
INSERT INTO enrollments (full_name, email, phone, message, status) VALUES
  ('John Doe', 'john@example.com', '+234 800 123 4567', 'I am interested in improving my public speaking skills.', 'pending'),
  ('Jane Smith', 'jane@example.com', '+234 800 765 4321', 'Looking forward to joining the next cohort.', 'contacted');

-- Sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, image_url, featured, published) VALUES
  (
    'The Art of Persuasive Communication',
    'art-of-persuasive-communication',
    'Discover the fundamental principles that make communication truly persuasive and impactful.',
    'In today''s fast-paced world, the ability to communicate persuasively is more valuable than ever. Whether you''re presenting to a boardroom, speaking at a conference, or simply having a conversation, mastering the art of persuasion can transform your personal and professional life.\n\nPersuasive communication is not about manipulation; it''s about connecting with your audience on a deeper level and presenting your ideas in a way that resonates with them. Here are the key principles:\n\n1. Know Your Audience\nUnderstanding who you''re speaking to is the foundation of persuasive communication. Research their interests, concerns, and values.\n\n2. Build Credibility\nPeople are more likely to be persuaded by someone they trust and respect. Establish your expertise and authenticity.\n\n3. Use Emotional Appeals\nWhile logic is important, emotions drive decisions. Connect with your audience''s feelings and aspirations.\n\n4. Tell Stories\nStories are memorable and relatable. Use narratives to illustrate your points and make them stick.\n\n5. Clear Call to Action\nEnd with a specific, actionable next step that your audience can take.',
    'Dr. Emmanuel Bassey',
    'Communication',
    '/images/hero/hero-1.jpg',
    true,
    true
  ),
  (
    'Building Confidence for Public Speaking',
    'building-confidence-public-speaking',
    'Learn practical techniques to overcome stage fright and deliver presentations with confidence.',
    'Public speaking anxiety is one of the most common fears, but it''s also one of the most conquerable. With the right mindset and techniques, anyone can become a confident speaker.\n\nHere''s how to build your confidence:\n\n1. Preparation is Key\nThe more prepared you are, the more confident you''ll feel. Practice your speech multiple times.\n\n2. Start Small\nBegin with smaller audiences and gradually work your way up to larger groups.\n\n3. Visualize Success\nSpend time imagining yourself delivering a successful presentation. Mental rehearsal works!\n\n4. Focus on Your Message\nShift your focus from yourself to the value you''re providing to your audience.\n\n5. Practice Breathing Techniques\nDeep breathing can help calm your nerves and center your mind before speaking.',
    'Ini Ememobong',
    'Public Speaking',
    '/images/hero/hero-2.jpg',
    true,
    true
  ),
  (
    'Leadership Through Effective Communication',
    'leadership-through-effective-communication',
    'Explore how great leaders use communication to inspire, motivate, and drive change.',
    'Leadership and communication are inextricably linked. The most effective leaders are those who can articulate their vision clearly and inspire others to action.\n\nKey aspects of leadership communication:\n\n1. Clarity of Vision\nGreat leaders paint a clear picture of where they''re going and why it matters.\n\n2. Active Listening\nTrue leadership involves listening more than speaking. Understand your team''s concerns and ideas.\n\n3. Authenticity\nBe genuine and transparent. People follow leaders they trust.\n\n4. Adaptability\nDifferent situations and audiences require different communication styles.\n\n5. Consistency\nYour words and actions must align. Walk the talk.',
    'Dr. Emmanuel Bassey',
    'Leadership',
    '/images/hero/hero-3.jpg',
    false,
    true
  );
