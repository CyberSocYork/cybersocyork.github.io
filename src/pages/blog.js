import React from "react";

// Components
import Layout from "../components/layout/layout.js";
import PostLink from "../components/postLink/postLink.js";

import "../styles/blog/blog.css";

const BlogIndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <Layout title="Blog">
            <div className="container">
                <div className="row my-5">
                    <div className="col">
                        <h1>Blog</h1>
                        {Posts}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogIndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 350)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        author
                    }
                }
            }
        }
    }
`;
