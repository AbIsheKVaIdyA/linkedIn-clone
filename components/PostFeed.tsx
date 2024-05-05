import { IPostDocument } from '@/mongodb/models/post'
import Post from './Post'


function PostFeed({posts}:{posts: IPostDocument[] }) {
  return (
    <div>
        {posts.map((post)=>(
            <Post key={post._id} post={post}/>
        ))}
    </div>
  )
}

export default PostFeed