    export interface Pago {
        id?: number;
        nombre?: string;
        tiptarjeta?:string;
        numtarjeta?: number|string;
        codseg?: number | string;
        mexp?:number | string;
        aexp?:number|string;
        }
        export interface Lista_pagos{
        productos?: Pago[];
        }
