import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from './store/Actions/course.action';
import { CourseItem } from './store/models/courseItem.model';
import { AppState } from './store/reducers';
import { ShoppingListState } from './store/reducers/course.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courseItems$: Observable<CourseItem[]> | undefined;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.courseItems$ = this.store.select((store) => store.course.courses);
  }

  addCourse(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
}
}