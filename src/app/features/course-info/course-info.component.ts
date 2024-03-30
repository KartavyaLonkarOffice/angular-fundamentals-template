import { Component } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent {
  course = { 
    title: 'Example Course Title', 
    id: 1, 
    duration: '2 hours', 
    date: new Date(), 
    authors: 'Author1, Author2'
  };
}