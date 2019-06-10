import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDownloadComponent } from './device-download.component';

describe('DeviceDownloadComponent', () => {
  let component: DeviceDownloadComponent;
  let fixture: ComponentFixture<DeviceDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
