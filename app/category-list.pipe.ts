import { Pipe } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe {
  transform(mediaItems) {
    var category = [];
    mediaItems.forEach(mediaItem => {
      if(category.indexOf(mediaItem.category) <= -1) {
        category.push(mediaItem.category);
      }
    });
    return category.join(', ');
  }
}