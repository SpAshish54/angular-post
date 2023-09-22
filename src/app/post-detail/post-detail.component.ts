import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  postId: number = 0 ;
  post: any;
  paramId: string = '';

  constructor(private http: HttpClient , private route: ActivatedRoute) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.postId = paramId !== null ? +paramId : 0;
    this.getPostById(this.postId)
    
  }

  getPostById(id: number): void {
    
    this.http.get(`http://localhost:8080/api/posts/${id}`).subscribe((data: any) => {
      this.post = data;
      
    });
  }
}
