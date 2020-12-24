import React from 'react';
import './NewsFeed.css'
import PostBlock from './postBlock/PostBlock';
import NewPostBlock from "./newPostBlock/NewPostBlock";

type TProps = {
    posts: any
    currentUser: any
    publicNewPost: (newPostBody: string) => void
}
const newsFeed = (props: TProps) => {

    const posts = props.posts
        .map((post: any) => <PostBlock key={post.id}
                                       user={post.user}
                                       content={post.content}
                                       contentMedia={post.contentMedia}
                                       likesCount={post.likesCount}
                                       shareCount={post.shareCount}/>)

    return (
        <div>
            <div className="news-feed">
                <NewPostBlock currentUser={props.currentUser}
                              publicNewPost={props.publicNewPost}/>
                {posts}
            </div>
        </div>
    )
}

export default newsFeed;