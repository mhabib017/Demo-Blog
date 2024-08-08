import { Blog } from '@/interfaces/ui/blogs';
import { API_BASE_PATH } from '@/utils/configs';
import { GetServerSideProps } from 'next';

interface BlogDetailProps {
    blog: Blog | null
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
    return (
        <>
            {blog ? <div>
                <div>
                    <h1 className="text-4xl font-bold py-12">{blog.title}</h1>
                    <p className=''>{blog.content}</p>
                </div>
            </div> : <div>
                Blog not found</div>}
        </>

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
