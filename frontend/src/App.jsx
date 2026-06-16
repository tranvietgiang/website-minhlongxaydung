import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { API_URL, defaultPosts } from './data';
import HomePage from './pages/HomePage';

export default function App() {
  const [posts, setPosts] = useState(defaultPosts);

  useEffect(() => {
    fetch(`${API_URL}/posts.php`)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result) && result.length) {
          setPosts(result);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <Layout>
      <HomePage posts={posts} />
    </Layout>
  );
}
