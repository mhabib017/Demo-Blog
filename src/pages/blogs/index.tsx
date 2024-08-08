import ItemBlog from '@/components/item-blog';
import { Blog } from '@/interfaces/ui/blogs';
import { API_BASE_PATH } from '@/utils/configs';
import { GetServerSideProps } from 'next';


interface BlogsProps {
    blogs: Blog[]
}

const Blogs = ({ blogs }: BlogsProps) => {
    return (
        <div className="pt-12">
            <h1 className="text-3xl font-bold text-center">All Blogs</h1>
            <div className='mt-12'>
                <div className='grid grid-cols-3 gap-4'>
                    {blogs.map((blog, idx) => (
                        <ItemBlog key={idx} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = (async () => {
    try {

        const res = await fetch(API_BASE_PATH + '/api/blogs/list'); // Adjust URL as needed
        
        if (res.status != 200) throw new Error('Failed to fetch');
        const data = await res.json();
        return {
            props: {
                blogs: data as Blog[]
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                blogs: []
            }
        };
    }
}) satisfies GetServerSideProps<BlogsProps>




export default Blogs;
