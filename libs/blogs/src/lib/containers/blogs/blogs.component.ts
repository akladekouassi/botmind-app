import { Component, OnInit } from '@angular/core';
import { BlogsService } from '@botmind-app/service/blogs';

@Component({
  selector: 'botmind-app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(private blogService: BlogsService) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(response => console.log('ALL BLOGSSSS::', response));
  }
}
