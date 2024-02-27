// import getTitle from "./dialog.js"
export default class Project {
    constructor (name) {
        this.name = name,
        this.array = []
    }

    getProject () {
        return this.array
    }
};

// function createProject(arg) {
//     const newProject = new Project(arg);
//     console.log(newProject);
//     return newProject;
// };

// export {createProject,}