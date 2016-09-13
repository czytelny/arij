import Project from '../models/projectModel';

function save(objectToSave) {
  return new Project(objectToSave).save();
}

function findById(projectId){
  return Project.findById(projectId);
}

function find(){
  return Project.find()
}


export default {
  save,
  findById,
  find
};
