import {Directive, DoCheck, EmbeddedViewRef, Input, NgIterable, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({selector: "[ngForOf][ngFor][ngForElse]"})
export class NgForElseDirective<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck {

  @Input()
  public ngForOf: (U & NgIterable<T>) | undefined | null;

  @Input()
  public ngForElse: TemplateRef<void> | undefined;

  private _emptyView: EmbeddedViewRef<void> | null = null;

  constructor(
    private readonly _viewContainer: ViewContainerRef,
  ) {
  }

  public ngDoCheck(): void {
    if (!this.ngForOf) {
      return;
    }

    const value = Array.from(this.ngForOf);
    if (value.length > 0 && this._emptyView) {
      this._viewContainer.remove(this._viewContainer.indexOf(this._emptyView));
      this._emptyView = null;
    } else if (this._emptyView === null && this._viewContainer.length === 0) {
      this._emptyView = this._viewContainer.createEmbeddedView(this.ngForElse as TemplateRef<void>);
    }
  }
}
