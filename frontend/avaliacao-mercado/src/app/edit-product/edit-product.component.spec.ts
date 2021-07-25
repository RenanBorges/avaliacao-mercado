import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { EditProductComponent } from './edit-product.component';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  let routerStub: Partial<Router>;
  let storeStub: Partial<Store>;

  storeStub: {
  }
  routerStub: {
  }

  beforeEach(async () => {
    window.history.pushState({ id: 1 }, '', '');
    await TestBed.configureTestingModule({
      declarations: [EditProductComponent],

      providers: [
        { provide: Router, useValue: routerStub },
        { provide: Store, useValue: routerStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
