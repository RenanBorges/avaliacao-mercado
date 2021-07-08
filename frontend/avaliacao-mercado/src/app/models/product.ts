export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  fileSource: string;
}

export class ModelProduct {
  name = '';
  price = 0;
  image = '';
  fileSource = '';
}
