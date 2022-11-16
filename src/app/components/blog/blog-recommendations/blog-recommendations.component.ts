import { Component, OnInit } from '@angular/core';
import { PostPreview } from '../../../../app/model/blog'

@Component({
  selector: 'app-blog-recommendations',
  templateUrl: './blog-recommendations.component.html',
  styleUrls: ['./blog-recommendations.component.scss']
})
export class BlogRecommendationsComponent implements OnInit {

  postPreviews: Array<PostPreview> = [
      {
        type: "Podcast",
        category: "Design",
        image: "../../../../assets/images/pictures/post-card-img.png",
        date: "July 28, 2020",
        timeToListen: "36 min",
        title: "What are color profiles and how they work in graphic design",
        text: "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...\n"
      },
      {
        type: "Article",
        category: "Development",
        image: "../../../../assets/images/pictures/post-card-img.png",
        date: "September 1, 2020",
        title: "How to choose the first programming language for a beginner",
        text: "Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui..."
      },
      {
        type: "Article",
        category: "Design",
        image: "../../../../assets/images/pictures/post-card-img.png",
        date: "September 1, 2020",
        title: "Should you choose a creative profession if you are attracted to creativity?",
        text: "Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...\n"
      },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
