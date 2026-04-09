import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { myPosts as staticPosts } from './static_blog_data';
import Post from './post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    setPosts(staticPosts);
  }, []);

  return (
    <>
      {posts?.length ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12} key={post._id}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
              {/* Make sure your Post component is correctly referenced, it should be capitalized if it's a component */}
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
          No data is available
        </Box>
      )}
    </>
  );
};

export default Posts;
