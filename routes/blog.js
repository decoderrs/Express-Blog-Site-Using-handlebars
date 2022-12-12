const e = require('express')
const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogData')
const subBlogs = require('../data/subArticle')

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/bloghome', (req, res) => {
    res.render('blogHome', {
        text1: blogs
    })
})

router.get('/blogpost/:slug', (req, res) => {
    let myblog = blogs.filter((e) => {
        return e.slug == req.params.slug;
    })  
    let sub_logs = subBlogs.filter((e) => {
        return e.slug == req.params.slug;
    })  
        res.render('blogPage', {
            text1 : blogs,
            Blogs : sub_logs,
            title: myblog[0].title,
            description: myblog[0].description
        })
    })

router.get('/blogpost/:slug/:subArticle', (req, res) => {
    let myblog = blogs.filter((e) => {
        return e.slug == req.params.slug;
    })
    let sub_content = subBlogs.filter((e) => {
        return e.slug == req.params.slug;
    })
    let sub_logs = subBlogs.filter((e) => {
        return e.sub_title == req.params.subArticle;
    })
    res.render('subArticle', {
        text1 : blogs,
        content : sub_logs,
        Blogs : sub_content,
        slug: myblog[0].slug,
        description : myblog[0].description
    })
})

module.exports = router;