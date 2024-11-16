import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
}

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    activeFilter: string = 'all';
    
    projects: Project[] = [
        {
            id: 1,
            title: "Modern Hardwood Installation",
            description: "Elegant oak flooring for living room",
            category: "hardwood",
            image: "assets/images/portfolio-1.png"
        },
        {
            id: 2,
            title: "Laminate Living Space",
            description: "Waterproof laminate for family area",
            category: "laminate",
            image: "assets/images/portfolio/laminate1.png"
        },
        {
            id: 3,
            title: "Vinyl Kitchen Floor",
            description: "Durable vinyl tiles for busy kitchen",
            category: "vinyl",
            image: "assets/images/portfolio/vinyl1.png"
        },
        // Add more projects as needed
    ];

    get filteredProjects() {
        if (this.activeFilter === 'all') {
            return this.projects;
        }
        return this.projects.filter(project => project.category === this.activeFilter);
    }

    filterProjects(category: string) {
        this.activeFilter = category;
    }
}