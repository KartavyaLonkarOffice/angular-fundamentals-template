import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface ICourse { title: string; id: number; /* other properties */ }

@Injectable({
    providedIn: 'root'
})
export class CoursesStoreService {
    private _courses: BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>([]);
    readonly courses$: Observable<ICourse[]> = this._courses.asObservable();

    getAll(){
        // replace with actual API call
        this._courses.next([/* fetched courses */]);
    }

    createCourse(course: ICourse) { 
        // replace with actual API call
        this._courses.value.push(course);
        this._courses.next(this._courses.value);
    }

    getCourse(id: number) {
        // replace with actual API call
        return this._courses.value.find(course => course.id === id);
    }

    editCourse(id: number, course: ICourse) { 
        // replace with actual API call
        // Here should replace course with updated version
    }

    deleteCourse(id: number) {
        // replace with actual API call
        // here should remove course with id from courses array
    }

    filterCourses(value: string) {
        // replace with actual API call
        // here should filter courses by value
    }

    getAllAuthors() {
        // replace with actual API call
        // here should return all authors
    }

    createAuthor(name: string) {
        // replace with actual API call
        // here should create author with name
    }

    getAuthorById(id: number) {
        // replace with actual API call
        // here should return author with id
    }

}