import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Post } from '../post';
import { PostService } from '../post.service';
import { AuthService } from '../../core/auth.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>

  constructor(private postService: PostService, public auth: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts()
    console.log(this)
  }

  delete(id: string) {
    this, this.postService.delete(id)
    this.toastr.success('Post was deleted!', 'Success', { timeOut: 1500, positionClass: 'toast-top-center' })
  }
}
