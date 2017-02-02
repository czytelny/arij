const router = require('express').Router();
const projectService = require('./../services/projectService');
const {checkPermissions, roles} = require('./../services/accessControl');


const accessRoles = [roles.admin];

router.get('/', checkPermissions(accessRoles), function (req, res) {
  projectService.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(500).send({error: "Getting projects failed"}));
});

router.get('/:projectId', checkPermissions(accessRoles), function (req, res) {
  projectService.findById(req.params.projectId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send({error: "Getting project failed"}));
});

router.post('/', checkPermissions(accessRoles), function (req, res) {
  projectService.save(req.body)
    .then((data) => res.send("Project added successfully"))
    .catch((err) => res.status(500).send("Adding project failed"));
});

router.put('/:projectId', checkPermissions(accessRoles), function (req, res) {
  projectService.update(req.params.projectId, req.body)
    .then((data) => res.send("Project modified successfully"))
    .catch((err) => res.status(500).send("Modifying project failed"));
});

module.exports = router;
