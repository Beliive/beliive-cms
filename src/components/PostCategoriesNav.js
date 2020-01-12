import React from 'react'
import Link from 'gatsby-link'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink" exact to={`/blog/`}>
      Todos
    </Link>
    {categories.map((category, index) => (
      <Link
        exact
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}

    {enableSearch && <BlogSearch />}
  </div>
)

export default PostCategoriesNav
