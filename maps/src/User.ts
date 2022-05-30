import faker from 'faker';
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string;
    location: {
        lat: number,
        lng: number
    };


    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.longitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}

console.log("Hello there")
const user = new User()
console.log("User is", user)




