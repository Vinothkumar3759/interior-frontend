import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private API_URL = 'http://localhost:1337/api/enquiries';

  constructor(private http: HttpClient) {}

  sendEnquiry(formData: any) {
    return this.http.post(this.API_URL, {
      data: formData
    });
  }
}
