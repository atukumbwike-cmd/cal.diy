export default class ProtonCalendarService {
  protected credential: any;

  constructor(credential: any) {
    this.credential = credential;
  }

  async getAvailability(dateFrom: string, dateTo: string, selectedCalendars: any[]): Promise<any[]> {
    return [];
  }

  async listCalendars(): Promise<any[]> {
    return [];
  }
}