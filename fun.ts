interface User {
  name: string;
  age: number;
  giveName(): string;
}

class UserDetails implements User {
  public name: string = 'Rishit';
  public age: number = 21;

  public giveName(): string {
    return this.name;
  }
}
