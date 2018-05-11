import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') isHovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering = true;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.isHovering = false;
  }
  
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}