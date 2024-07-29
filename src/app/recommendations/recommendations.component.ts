import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recommendations: any[] = [];
  
  expandedCardIndex: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        try {
          this.recommendations = JSON.parse(decodeURIComponent(params['data']));
        } catch (error) {
          console.error('Error parsing recommendations data', error);
        }
      }
    });
  }
  toggleDetails(index: number): void {
    console.log('Clicked index:', index); // Add this for debugging
    this.expandedCardIndex = this.expandedCardIndex === index ? null : index;
  }
  
}
