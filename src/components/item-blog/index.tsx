import { Blog } from '@/interfaces/ui/blogs'
import { CalendarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

interface ItemBlogProps {
    blog: Blog
}

const ItemBlog = ({ blog }: ItemBlogProps) => {
    return (
        <Link href={`/blogs/${blog.id}`}>
            <div className='w-full p-8 border-[1px] border-slate-300 rounded h-full space-y-2 hover:bg-gray-800'>
                <div className='text-3xl'>
                    {blog.title}
                </div>
                <div className='space-y-1'>
                    <div className='flex gap-2'>
                        <CalendarIcon className="block h-6 w-6" /> {blog.createdAt}
                    </div>
                    <div className='text-sm'>
                        {blog.content.length > 200 ? blog.content.substring(0, 200) + "..." : blog.content}
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default ItemBlog
