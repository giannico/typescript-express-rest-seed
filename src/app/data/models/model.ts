export class Model {
  constructor(public id: string) {
    this.id = id;
  }

  set(data: any): void {
    if (data == null) { return null; }

    for (const key in data) {
      if (this.hasOwnProperty(key) && key !== 'id') {
        this[key] = data[key];
      }
    }
  }

  isNew(): boolean {
    return this.id == null;
  }
}