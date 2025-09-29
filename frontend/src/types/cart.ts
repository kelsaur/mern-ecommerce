export interface CartItem {
  _id: string;
  title: string;
  price: number;
  color: string;
  image: string;
  size: string | number;
  quantity: number;
}