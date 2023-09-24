import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service'; // Import the DataService

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  constructor(private dataService: DataService) { }  // Use the DataService

  ngAfterViewInit(): void {
    this.dataService.fetchData().subscribe(res => {
      this.dataService.populateData(res);
      this.createChart();
    });
  }

  createChart() {
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataService.dataSource  // Use the data from the DataService
    });
  }
}

// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// import { Chart } from 'chart.js';

// @Component({
//   selector: 'pb-homepage',
//   templateUrl: './homepage.component.html',
//   styleUrls: ['./homepage.component.scss']
// })
// export class HomepageComponent implements AfterViewInit {

//   public dataSource = {
//     datasets: [
//         {
//             data: [],
//             backgroundColor: [
//                 '#ffcd56',
//                 '#ff6384',
//                 '#36a2eb',
//                 '#fd6b19',
//             ]
//         }
//     ],
//     labels: []
// };


//   constructor(private http: HttpClient) { }

//   ngAfterViewInit(): void {
//     this.http.get('http://localhost:3000/budget')
//     .subscribe( (res : any) => {
//       for (var i = 0; i < res.myBudget.length; i++) {
//         this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
//         this.dataSource.labels[i] = res.myBudget[i].title;
//         this.createChart();
//     }
//     });
//   }

//   createChart() {
//     //var ctx = document.getElementById('myChart').getContext('2d');
//     //var ctx = document.getElementById('myChart');
//     //var ctx = (<HTMLCanvasElement>document.getElementById('myChart')).getContext('2d');
//     var ctx = document.getElementById('myChart') as HTMLCanvasElement;

//     var myPieChart = new Chart(ctx, {
//         type: 'pie',
//         data: this.dataSource
//     });
// }

// }
