export interface Producto {
  id?: number;
  nombre?: string;
  descripcion?: string;
  precio?: number | string;
  cantidad?:number | string;
  img?: string;
}
export interface Lista_productos{
  productos?: Producto[];
}

