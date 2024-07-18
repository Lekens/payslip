import { faker } from '@faker-js/faker';

export interface IPaySlip {
    id: string,
    fromDate: Date;
    toDate: Date;
    file: string;
}

const paySlips: IPaySlip[] = [
    {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    },{
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    },{
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    },{
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }, {
        fromDate: faker.date.past(),
        toDate: faker.date.future(),
        file: faker.image.url(),
        id: faker.string.nanoid(5),
    }
];

export const getPaySlips = () => paySlips;

export const getPaySlipById = (id: string) => paySlips.find(slip => slip.id === id);
