// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/layout';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  widget4_1: Widget4Data;
  widget4_2: Widget4Data;
  widget4_3: Widget4Data;
  widget4_4: Widget4Data;

  barchartData;
  barchartOptions;

  doughnutChartData;
  doughnutChartOptions;

  constructor(private layoutConfigService: LayoutConfigService) {}

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: [
        '35% France',
        '23% China',
        '13% India',
        '10% United States',
        '19% Others'
      ],
      datasets: [
        {
          // label: 'dataset 1',
          backgroundColor: [
            'rgb(113, 106, 202)',
            'rgb(52, 191, 163)',
            'rgb(255, 184, 34)',
            this.layoutConfigService.getConfig('colors.state.danger'),
            this.layoutConfigService.getConfig('colors.state.brand')
          ],
          data: [35, 23, 13, 10, 19]
        }
      ]
    };

    this.doughnutChartOptions = {
      type: 'doughnut',
      data: this.doughnutChartData,
      centerText: {
        display: true,
        text: '280'
      },
      options: {
        title: {
          display: false
        },
        cutoutPercentage: 70,
        tooltips: {
          intersect: false,
          mode: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: true,
          position: 'right'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              stacked: true
            }
          ],
          yAxes: [
            {
              display: false,
              stacked: true,
              gridLines: false
            }
          ]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        color: [
          'red', // color for data at index 0
          'blue', // color for data at index 1
          'green', // color for data at index 2
          'black' // color for data at index 3
        ]
      }
    };

    this.barchartData = {
      labels: [
        'Label 1',
        'Label 2',
        'Label 3',
        'Label 4',
        'Label 5',
        'Label 6',
        'Label 7',
        'Label 8',
        'Label 9',
        'Label 10',
        'Label 11',
        'Label 12',
        'Label 13',
        'Label 14',
        'Label 15',
        'Label 16'
      ],
      datasets: [
        {
          // label: 'dataset 1',
          backgroundColor: this.layoutConfigService.getConfig(
            'colors.state.success'
          ),
          data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20]
        },
        {
          // label: 'dataset 2',
          backgroundColor: '#f3f3fb',
          data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20]
        }
      ]
    };

    this.barchartOptions = {
      type: 'bar',
      data: this.barchartData,
      options: {
        title: {
          display: false
        },
        tooltips: {
          intersect: false,
          mode: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        barRadius: 4,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              stacked: true
            }
          ],
          yAxes: [
            {
              display: false,
              stacked: true,
              gridLines: false
            }
          ]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    };

    // @ts-ignore
    this.widget4_1 = shuffle([
      {
        pic: './assets/media/files/doc.svg',
        title: 'Metronic Documentation',
        url: 'https://keenthemes.com.my/metronic'
      },
      {
        pic: './assets/media/files/jpg.svg',
        title: 'Project Launch Evgent',
        url: 'https://keenthemes.com.my/metronic'
      },
      {
        pic: './assets/media/files/pdf.svg',
        title: 'Full Developer Manual For 4.7',
        url: 'https://keenthemes.com.my/metronic'
      },
      {
        pic: './assets/media/files/javascript.svg',
        title: 'Make JS Great Again',
        url: 'https://keenthemes.com.my/metronic'
      },
      {
        pic: './assets/media/files/zip.svg',
        title: 'Download Ziped version OF 5.0',
        url: 'https://keenthemes.com.my/metronic'
      },
      {
        pic: './assets/media/files/pdf.svg',
        title: 'Finance Report 2016/2017',
        url: 'https://keenthemes.com.my/metronic'
      }
    ]);
    // @ts-ignore
    this.widget4_2 = shuffle([
      {
        pic: './assets/media/users/100_4.jpg',
        username: 'Anna Strong',
        desc: 'Visual Designer,Google Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-brand'
      },
      {
        pic: './assets/media/users/100_14.jpg',
        username: 'Milano Esco',
        desc: 'Product Designer, Apple Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-warning'
      },
      {
        pic: './assets/media/users/100_11.jpg',
        username: 'Nick Bold',
        desc: 'Web Developer, Facebook Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-danger'
      },
      {
        pic: './assets/media/users/100_1.jpg',
        username: 'Wilter Delton',
        desc: 'Project Manager, Amazon Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-success'
      },
      {
        pic: './assets/media/users/100_5.jpg',
        username: 'Nick Stone',
        desc: 'Visual Designer, Github Inc.',
        url: 'https://keenthemes.com.my/metronic',
        buttonClass: 'btn-label-dark'
      }
    ]);
    // @ts-ignore
    this.widget4_3 = shuffle([
      {
        icon: 'flaticon-pie-chart-1 kt-font-info',
        title: 'Metronic v6 has been arrived!',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$500',
        valueColor: 'kt-font-info'
      },
      {
        icon: 'flaticon-safe-shield-protection kt-font-success',
        title: 'Metronic community meet-up 2019 in Rome.',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$1260',
        valueColor: 'kt-font-success'
      },
      {
        icon: 'flaticon2-line-chart kt-font-danger',
        title: 'Metronic Angular 7 version will be landing soon..',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$1080',
        valueColor: 'kt-font-danger'
      },
      {
        icon: 'flaticon2-pie-chart-1 kt-font-primary',
        title: 'ale! Purchase Metronic at 70% off for limited time',
        url: 'https://keenthemes.com.my/metronic',
        value: '70% Off!',
        valueColor: 'kt-font-primary'
      },
      {
        icon: 'flaticon2-rocket kt-font-brand',
        title: 'Metronic VueJS version is in progress. Stay tuned!',
        url: 'https://keenthemes.com.my/metronic',
        value: '+134',
        valueColor: 'kt-font-brand'
      },
      {
        icon: 'flaticon2-notification kt-font-warning',
        title:
          'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
        url: 'https://keenthemes.com.my/metronic',
        value: '70% Off!',
        valueColor: 'kt-font-warning'
      },
      {
        icon: 'flaticon2-file kt-font-focus',
        title: 'Metronic React version is in progress.',
        url: 'https://keenthemes.com.my/metronic',
        value: '+13%',
        valueColor: 'kt-font-focus'
      }
    ]);
    // @ts-ignore
    this.widget4_4 = shuffle([
      {
        pic: './assets/media/client-logos/logo5.png',
        title: 'Trump Themes',
        desc: 'Make Metronic Great Again',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$2500',
        valueColor: 'kt-font-brand'
      },
      {
        pic: './assets/media/client-logos/logo4.png',
        title: 'StarBucks',
        desc: 'Good Coffee & Snacks',
        url: 'https://keenthemes.com.my/metronic',
        value: '-$290',
        valueColor: 'kt-font-brand'
      },
      {
        pic: './assets/media/client-logos/logo3.png',
        title: 'Phyton',
        desc: 'A Programming Language',
        url: 'https://keenthemes.com.my/metronic',
        value: '+$17',
        valueColor: 'kt-font-brand'
      },
      {
        pic: './assets/media/client-logos/logo2.png',
        title: 'GreenMakers',
        desc: 'Make Green Great Again',
        url: 'https://keenthemes.com.my/metronic',
        value: '-$2.50',
        valueColor: 'kt-font-brand'
      },
      {
        pic: './assets/media/client-logos/logo1.png',
        title: 'FlyThemes',
        desc: "A Let's Fly Fast Again Language",
        url: 'https://keenthemes.com.my/metronic',
        value: '+200',
        valueColor: 'kt-font-brand'
      }
    ]);
  }
}
