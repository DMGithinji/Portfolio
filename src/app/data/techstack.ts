export type Category =  "backend" | "frontend" | "other" | "all";

export interface TechstackItem {
    name: string;
    imagePath: string;
    category: Category;
}

export class TechstackDB {
    public static techstack: Array<TechstackItem> = [
        {
            name: "Python",
            imagePath: "assets/images/tech/python.png",
            category: "backend"
        },
        {
            name: "Javascript",
            imagePath: "assets/images/tech/javascript.svg",
            category: "frontend"
        },
        {
            name: "Typescript",
            imagePath: "assets/images/tech/typescript.png",
            category: "frontend"
        },
        {
            name: "ReactJs",
            imagePath: "assets/images/tech/react.png",
            category: "frontend"
        },
        {
            name: "Angular",
            imagePath: "assets/images/tech/angular.png",
            category: "frontend"
        },
        {
            name: "Django",
            imagePath: "assets/images/tech/django.png",
            category: "backend"
        },
        {
            name: "DRF",
            imagePath: "assets/images/tech/drf.png",
            category: "backend"
        },
        {
            name: "Redux",
            imagePath: "assets/images/tech/redux.png",
            category: "frontend"
        },
        {
            name: "PostgreSQL",
            imagePath: "assets/images/tech/psql.png",
            category: "backend"
        },
        {
            name: "Firebase",
            imagePath: "assets/images/tech/firebase.png",
            category: "other"
        },
        {
            name: "Digital Ocean",
            imagePath: "assets/images/tech/digitalocean.png",
            category: "other"
        },
        {
            name: "Github",
            imagePath: "assets/images/tech/github.png",
            category: "other"
        },
        {
            name: "Jenkins",
            imagePath: "assets/images/tech/jenkins.png",
            category: "other"
        },
        {
            name: "Figma",
            imagePath: "assets/images/tech/figma.png",
            category: "other"
        },
    ]
}