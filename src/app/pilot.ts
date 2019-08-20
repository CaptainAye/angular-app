export class Pilot {
    static defaultImageUrl = '/assets/unknown-pilot.jpg';

    id: number;
    firstName: String;
    lastName: String;
    imageUrl: String;

    constructor(attrs: {id?: number, name?: string, firstName?: string, lastName?: string, imageUrl?: string} = {}) {
        this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
        this.id = attrs.id || 0;
        if (attrs.name) {
            this.name = attrs.name;
          } else {
            this.firstName = attrs.firstName;
            this.lastName = attrs.lastName;
          }
    }

    set name(name: String) {
        const names = name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    get name() {
        return this.firstName + ' ' + this.lastName;
    }

}
