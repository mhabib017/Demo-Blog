import { Blog } from '@/interfaces/ui/blogs'
import Link from 'next/link'
import React from 'react'

interface ItemBlogProps {
    blog: Blog
}

const ItemBlog = ({ blog }: ItemBlogProps) => {
    return (
        <Link href={`/blogs/${blog.id}`}>
            <div className='w-full p-8 border-[1px] border-slate-300 rounded-md h-full space-y-2'>
                <div className='text-3xl'>
                    {blog.title}
                </div>
                <div className='space-y-[2px]'>
                    <div className='text-base'>
                        {blog.content.length > 200 ? blog.content.substring(0, 200) + "..." : blog.content}
                    </div>
                    <div>
                        {blog.publishedAt}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemBlog
