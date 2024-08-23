const express = require('express');
const multer = require('multer')
const { User, Category, BlogPost } = require('../models');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
// CRUD for Users
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CRUD for Categories
router.post('/categories', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/categories/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.patch('/categories/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Category.update(req.body, {
            where: { id: id }
        });

        if (updated) {
            const updatedCategory = await Category.findByPk(id);
            res.json(updatedCategory);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/posts', upload.single('image'), async (req, res) => {
    try {
        // req.body will now contain the form fields
        // req.file will contain the uploaded file data

        const { title, slug, content, meta_title, meta_keywords, meta_description, categoryId } = req.body;
        
        // You can save the image path or filename in the database
        const imagePath = req.file ? req.file.path : null;

        // Create the blog post
        const blogPost = await BlogPost.create({
            title,
            slug,
            content,
            meta_title,
            meta_keywords,
            meta_description,
            categoryId,
            image: imagePath // save image path or filename in the database
        });

        res.status(201).json(blogPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/posts', async (req, res) => {
    try {
        const { categoryId } = req.query;  // Get categoryId from query parameters

        // Define query options
        const queryOptions = {
            include: [{
                model: Category,  // Include associated category details
                as: 'category',
                attributes: ['id', 'name']  // Fetch only id and name from Category
            }]
        };

        // If categoryId is provided, add it to the where clause
        if (categoryId) {
            queryOptions.where = {
                categoryId: {
                    [Op.eq]: categoryId
                }
            };
        }

        const blogPosts = await BlogPost.findAll(queryOptions);
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content, image, categoryId } = req.body;

    try {
        const blogPost = await BlogPost.findByPk(id);
        if (blogPost) {
            blogPost.title = title;
            blogPost.content = content;
            blogPost.image = image;
            blogPost.categoryId = categoryId;

            await blogPost.save();
            res.json(blogPost);
        } else {
            res.status(404).json({ error: 'Blog post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const blogPost = await BlogPost.findByPk(id);
        if (blogPost) {
            await blogPost.destroy();
            res.json({ message: 'Blog post deleted successfully' });
        } else {
            res.status(404).json({ error: 'Blog post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blogPost = await BlogPost.findByPk(id);

        if (!blogPost) {
            return res.status(404).json({ error: 'blogPost not found' });
        }

        res.json(blogPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
