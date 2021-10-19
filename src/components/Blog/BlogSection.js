import React from 'react';
import styled from 'styled-components'
import BlogCard from '../../styled/BlogCard';
import Heading from '../../styled/Heading';

const BlogWrapper = styled.section`

`;

function BlogSection() {
    return (
        <BlogWrapper>
            <Heading>
                Take a look at our latest articles
            </Heading>
            <BlogCard title="Headline here" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro odio at eaque, possimus cumque asperiores aperiam ea. Veniam ut ab sequi quia culpa omnis?" link="/" />
            <BlogCard title="Headline here" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro odio at eaque, possimus cumque asperiores aperiam ea. Veniam ut ab sequi quia culpa omnis?" link="/" />
            <BlogCard title="Headline here" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro odio at eaque, possimus cumque asperiores aperiam ea. Veniam ut ab sequi quia culpa omnis?" link="/" />
            <BlogCard title="Headline here" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro odio at eaque, possimus cumque asperiores aperiam ea. Veniam ut ab sequi quia culpa omnis?" link="/" />
            <BlogCard title="Headline here" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro odio at eaque, possimus cumque asperiores aperiam ea. Veniam ut ab sequi quia culpa omnis?" link="/" />
            <img src="./img/logo.png" alt="" />
        </BlogWrapper>
    )
}

export default BlogSection
