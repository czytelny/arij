const router = require('express').Router();
const projectService = require('./../services/projectService');
const logger = require('winston');
const {checkPermissions} = require('./../services/accessControl');



router.get('/', checkPermissions(['admin']), function (req, res) {
  projectService.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(500).send({error: "Getting projects failed"}));
});

router.get('/:projectId', checkPermissions(['admin']), function (req, res) {
  projectService.findById(req.params.projectId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send({error: "Getting project failed"}));
});

router.post('/', checkPermissions(['admin']), function (req, res) {
  projectService.save(req.body)
    .then((data) => res.send("Project added successfully"))
    .catch((err) => res.status(500).send("Adding project failed"));
});

router.put('/:projectId', function (req, res) {
  projectService.update(req.params.projectId, req.body)
    .then((data) => res.send("Project modified successfully"))
    .catch((err) => res.status(500).send("Modifying project failed"));
});

module.exports = router;
