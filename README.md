# ngx-for-else

This library extends ngFor (only when imported) with the ability to provide a template for when there is nothing to loop over.

```html
<div *ngFor="let item of items; else emptyTemplate">
  {{ item | json }}
</div>

<ng-template #emptyTemplate>
  No items
</ng-template>
```
![intellij import](https://raw.githubusercontent.com/kbarendrecht/ngx-for-else/develop/projects/ngx-for-else/intellij.png)

---
### Installation
```bash
npm i ngx-for-else
```

---

### License

[MIT](https://choosealicense.com/licenses/mit/)

---

### Special thanks

[Aubrey Harris](https://github.com/adharris) for [suggesting](https://github.com/angular/angular/issues/14479) the syntax

[Pete Bacon Darwin](https://github.com/petebacondarwin) for making a simple [solution](https://stackblitz.com/edit/angular-ivy-grtarz?file=src%2Fapp%2Fwhen-empty.directive.ts)
