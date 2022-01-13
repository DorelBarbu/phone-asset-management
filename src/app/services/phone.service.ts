import { Injectable } from "@angular/core";
import phones from "src/mocks/phones";
import Phone from "src/types/phone.type";

@Injectable()
export class PhoneService {
  async getPhones(pageNumber: number, pageSize: number): Promise<Phone[]> {
    return phones.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  async updatePhone(phone: Phone) {
    return {
      'success': true
    }
  }
}