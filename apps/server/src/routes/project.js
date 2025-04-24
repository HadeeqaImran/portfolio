const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Technology = require('../models/technology');

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: API for managing projects
 */

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of projects
 */
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, year, description, image, technologies]
 *             properties:
 *               title:
 *                 type: string
 *               year:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               link:
 *                 type: string
 *               github:
 *                 type: string
 *               video:
 *                 type: string
 *               technologies:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Project created
 *       400:
 *         description: Validation error
 */
router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
});

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project data
 *       404:
 *         description: Project not found
 */
router.get('/:id', async (req, res) => {
    try {
      const project = await Project.findById(req.params.id).populate('technologies');
      console.log("project", project)
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });
  

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Update a project by ID
 *     tags: [Projects]

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Project updated
 *       404:
 *         description: Project not found
 */
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err.message });
  }
});

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Delete a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project deleted
 *       404:
 *         description: Project not found
 */
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
});

module.exports = router;
