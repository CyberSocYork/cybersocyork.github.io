import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import "../styles/templates/blogTemplate.scss";

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds the post data
	const { frontmatter, html } = markdownRemark; // frontmatter is all the meta-content in the blog post, html is the actual content
	return (
		<Layout title={`Blog / ${frontmatter.title}`}>
			<div className="blog-post container">
				<div className="row my-5">
					<div class="col">
						<h1 className="post-title">{frontmatter.title}</h1>
						<h2 className="post-detail">
							<span class="post-author">{frontmatter.author}</span> -{" "}
							<span class="post-date">{frontmatter.date}</span>
						</h2>
						<div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				author
			}
		}
	}
`;
