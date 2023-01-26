import React from "react";
import Article from "./Article";
function ArticleList({posts}) {
    const posts_ = posts.map(post => {
        return (
            <>
                <Article key={"post"+post.id} title={post.title} date={post.date} preview={post.preview}/>
                <Article key={"post"+post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
            </>
        );
    });
    
    return (
        <main>
            {posts_}
        </main>
    );
}
export default ArticleList