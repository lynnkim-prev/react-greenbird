import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: 'Green'
      },
      content: '1st tweet',
      img: 'https://cpschools.com/wellness/wp-content/uploads/sites/52/2018/07/BUTTON_Twitter.jpg'
    }
  ]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
