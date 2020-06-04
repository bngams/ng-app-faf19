import { Resource } from '../../api/resource';

export class Product implements Resource<number> {

    constructor(
        public id: number,
        public name: string,
        public price: number
    ) { }

}
