export type Role = "customer" | "merchant" | "rider" | "supplier" | "admin" | "executive";

export type Status =
  | "pending"
  | "processing"
  | "ready"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "paid"
  | "failed"
  | "verified"
  | "needs_review";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  cost: number;
  discount?: number;
  stock: number;
  reorderLevel: number;
  sku: string;
  image: string;
  photos?: string[];
  merchantId: string;
  merchantName: string;
  merchantSlug: string;
  location: string;
  rating: number;
  reviews: number;
  verified: boolean;
  tags: string[];
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  owner: string;
  category: string;
  lga: string;
  address: string;
  phone: string;
  verified: boolean;
  rating: number;
  reviews: number;
  followers: number;
  sales: number;
  orders: number;
  description: string;
  hours: string;
  status: string;
}

export interface Order {
  id: string;
  customer: string;
  customerPhone: string;
  merchant: string;
  merchantId: string;
  items: { productId: string; name: string; qty: number; price: number }[];
  amount: number;
  payment: string;
  paymentStatus: string;
  status: string;
  date: string;
  delivery: string;
  address: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  orders: number;
  spent: number;
  lastPurchase: string;
  outstanding: number;
  type: string;
}

export interface Supplier {
  id: string;
  name: string;
  category: string;
  contact: string;
  location: string;
  purchases: number;
  outstanding: number;
  lastPurchase: string;
  rating: number;
  moq: string;
  verified: boolean;
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  status: string;
  date: string;
  party: string;
  method: string;
}

export interface Delivery {
  id: string;
  orderId: string;
  rider: string;
  pickup: string;
  dropoff: string;
  status: string;
  fee: number;
  distance: string;
  customer: string;
  phone: string;
}
