import { Blog } from '@/interfaces/ui/blogs';
import { API_BASE_PATH } from '@/utils/configs';
import { GetServerSideProps } from 'next';
import { CalendarIcon, FaceFrownIcon } from '@heroicons/react/24/outline'

interface BlogDetailProps {
    blog: Blog | null
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
    return (
        <div className='py-8'>
            {blog ? <div>
                <div>
                    <h1 className="text-4xl font-bold py-12">{blog.title}</h1>
                    <div className='space-y-8'>
                        <div className='flex gap-2'>
                            <CalendarIcon className="block h-6 w-6" /> {blog.createdAt}
                        </div>
                        <p className='text-xl font-medium leading-8'>{blog.content}</p>
                    </div>
                </div>
            </div> : <div className='flex items-center justify-center h-[90vh]'>
                <div className=' flex gap-4'>
                    <div className='text-4xl text-center justify-center'>
                        Blog Not Found
                    </div>
                    <FaceFrownIcon className="block h-9 w-9" />
                </div>
            </div>}
        </div>

    );
};

export const getServerSideProps = (async (context) => {
    try {

        const id = context.params ? context.params.id : "";

        const res = await fetch(API_BASE_PATH + '/api/blogs/' + id); // Adjust URL as needed

        if (res.status != 200) throw new Error('Failed to fetch');
        const data = await res.json();
        return {
            props: {
                blog: data as Blog
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                blog: null
            }
        };
    }
}) satisfies GetServerSideProps<BlogDetailProps>


export default BlogDetail;
