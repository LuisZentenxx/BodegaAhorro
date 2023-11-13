export interface Product {
    id?: number
    name: string
    slug? : string
    description: string
    price: number
    rating?: number
    count_in_stock : number
    category: string
    image: File | null;
    quantity?: number
    num_reviews?: number
  }

  export interface Order {
    total_price: number;
    order_items : Product[];
}
  
  export interface User{
    id: number
    email: string
    name: string
  }

  export interface Token {
      exp: number
      is_staff : boolean;
      avatar : string;
  };