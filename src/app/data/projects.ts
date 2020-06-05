export interface Project {
    title: string;
    summary: string;
    imagePath: string;
    description: string;
    tags: Array<string>;
    caseStudyUrl?: string;
    liveLink?: string;
    githubLink?: string;
}

export class ProjectDB {
    public static projects: Array<Project> = [
        { 
            title: "Rentpay",
            summary: "A platform that allows property managers and landlords digitize how they manage their rental investments",
            imagePath: "assets/images/projects/rentpay.png",
            description: "A platform that allows property managers and landlords digitize how they manage their rental investments",
            tags: ["Python", "Django", "Rest framework", "Typescript", "Angular", "Github", "Jenkins", "Digital Ocean", "Celery", "Redis", "Mpesa Daraja"],
            caseStudyUrl: "/projects/rentpay",
            liveLink: "https://proptech.co.ke/"
        },
        {
            title: "Sudoku",
            summary: "A sudoku application build using react, redux, react-hooks and typescript",
            imagePath: "assets/images/projects/Sudoku.png",
            description: "I built this app to improve my grasp on react-redux and explore the benefits of using react hooks, writing tests & using Typescript in a react application",
            tags: ["Typescript", "React", "Redux", "React Hooks", "Styled Components", "Firebase"],
            githubLink: "https://github.com/DMGithinji/React-Sudoku",
            liveLink: "hhttp://simple-sudoku-app.firebaseapp.com/"
        },
        {
            title: "Path Finder",
            summary: "A simple app that visualizes different path finding algorithms",
            imagePath: "assets/images/projects/Pathfinder.png",
            description: "A fun project with Javascript. I built this to challenge myself on visualizing how various path finding algorithms behave",
            tags: ["Javascript", "React", "Djikstra's Algorithm", "A* Algorithm"],
            githubLink: "https://github.com/DMGithinji/PathFinder-React",
            liveLink: "https://reactpathfinder1.firebaseapp.com/"
        },
        {
            title: "Foodies App",
            summary: "A simple angular & flask app where users can view restaurants' menus and submit a rating",
            imagePath: "assets/images/projects/Foodiez.png",
            description: "One of my first projects working with Angular. I focused on front-end development while my colleague handled backend development",
            tags: ["Javascript", "Angular"],
            caseStudyUrl: "https://github.com/DMGithinji/Foodiez",
            liveLink: "https://foodiez-app.firebaseapp.com/"
        }
    ]
}
