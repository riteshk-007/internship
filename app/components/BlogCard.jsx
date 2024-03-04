import React from "react";
import Image from "next/image";
import Button from "./Button";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-black via-gray-900 to-black rounded-xl shadow-lg overflow-hidden md:max-w-lg p-4 flex flex-col items-center text-white border-2 border-gray-600">
      <Image
        width={500}
        height={300}
        className="w-full object-cover rounded-t-xl"
        src={blog.image}
        alt={blog.title}
      />
      <div className="p-8 w-full text-left">
        <div className="uppercase tracking-wide text-sm font-semibold text-white">
          {blog.title}
        </div>
        <p className="mt-2 text-white">{blog.content}</p>
      </div>
      <Button
        text="Read More"
        className="mt-4 bg-red text-black rounded-full px-4 py-2"
      />
    </div>
  );
};

export default BlogCard;
