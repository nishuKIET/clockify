// import { Component, OnInit } from '@angular/core';
// // import { isPlatformBrowser } from "@angular/common";
// // import { GlobalUtils, SearchResultModel, SeoService, SearchResultsService } from "@tandfgroup/discovery-client-ubx-shared-lib";
// import { SERIES_CONFIG } from "../../search-results/search-results.config";
// // import { SearchConfigUtil } from "../../search-results/search-config-util";
// import { ActivatedRoute } from '@angular/router';
// const scrollToElement = require('scroll-to-element');


// @Component({
//   selector: 'app-series-list',
//   templateUrl: './series-list.component.html',
//   styleUrls: ['./series-list.component.css']
// })
// export class SeriesListComponent implements OnInit {

//   // seriesList: SearchResultModel;
//   letter: string = 'A';
//   isLoading = true;
//   pageOffset: number;
//   offset: number;
//   searchKey: string = '';
//   isBrowser: boolean;
//   pageLoaded: boolean;
//   scrollToElement = scrollToElement;

//   constructor(private route: ActivatedRoute, private searchConfigUtil: SearchConfigUtil, private globalUtils: GlobalUtils, private seoService: SeoService, private searchResultsService: SearchResultsService) {
//     // this.isBrowser = isPlatformBrowser(platformId);
//   }

//   ngOnInit() {
//     this.seoService.title = 'eBook Series';
//     this.route.queryParams.subscribe(qparams => {
//       this.letter = qparams['letter'] ? qparams['letter'] : 'A';
//       this.searchKey = qparams['searchKey'] ? qparams['searchKey'] : '';
//       this.letter = this.letter.toLowerCase();
//       this.pageOffset = 1;
//       this.offset = 0;
//       // restriction on accepting string in place of letter
//       if (this.searchKey.length > 1) {
//         this.getSeries();
//       } else if (this.letter.length === 1) {
//         this.getSeries();
//       } else {
//         this.isLoading = false;
//       }

//     });
//   }

//   setOffset(offset) {
//     this.pageOffset = offset;
//     this.isLoading = true;
//     this.offset = (offset - 1) * 50;
//     const elem = document.querySelector('.app-wrapper');
//     this.scrollToElement(elem);
//     //window.scrollTo({ left: 0, top: 300, behavior: 'smooth' });
//     this.getSeries();
//   }

//   onLetterChange(letter) {
//     this.letter = letter;
//     this.globalUtils.setCurrentRoute(['/series'], { queryParams: { letter } });
//   }

//   async getSeries() {
//     if (this.isBrowser) {
//       this.isLoading = true;
//       let newConfig = JSON.parse(JSON.stringify(SERIES_CONFIG));
//       const config = await this.searchConfigUtil.getSeriesConfig(newConfig, this.letter, this.offset, this.searchKey);
//       this.searchResultsService.getProductsFromApi(config, 'series').then((result) => {
//         this.seriesList = result;
//         this.isLoading = false;
//         this.pageLoaded = true;
//       }).catch(err => {
//         console.log('series call got failed', err);
//         this.isLoading = false;
//       });
//     }
//   }

//   formatTotalCount() {
//     if (this.seriesList && this.seriesList.productCount) {
//       return this.seriesList.productCount
//         .toString()
//         .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
//     return 0;
//   }

//   searchSeries(searchKey: string) {
//     this.globalUtils.setCurrentRoute(['/series'], { queryParams: { searchKey } });
//   }

// }
