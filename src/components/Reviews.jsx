import React from 'react';
import AnimatedHeadline from '../animation/AnimatedHeadline';

const reviewsData = {
    name: 'Zakashik',
    
}

const Reviews = () => {
  return (
    <div className="w-screen h-screen pt-20 bg-[var(--color-accent)] text-[#141024]">
      <AnimatedHeadline text="Reviews" className="pb-5" />
    </div>
  );
};

export default Reviews;
