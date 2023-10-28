class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false),
// і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants,
// якщо door відкрита.Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.
abstract class House {
  protected door: boolean;
  protected key: Key;
  private tenants: Person[];

  public comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }

  public abstract openDoor(key: Key): void;
}

// Мій будинок(MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.Реалізуйте метод openDoor у цьому класі.
// Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.
class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) this.door = true;
  }
}

//Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
