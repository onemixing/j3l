"use client";
import Link from "next/link";
import piezas from "../api/products.json";
import { Button } from "@/components/ui/button";
import { CartProvider, useCart } from "react-use-cart";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Cart(){
    //const cartItems = JSON.parse(localStorage.getItem("cart"));
    const [cartItems, setCartItems] = useState(null);;
    /*
    useEffect(() => {
        localStorage.removeItem("cart");
        console.log(localStorage.getItem('cart') );
        if ("cart" in localStorage) {
            alert('yes');
        } else {
            alert('no');
        }
    }, []);*/

    return (<div><section className="bg-background py-12 md:py-16 lg:py-24"><Table>
        <TableCaption>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Medida</TableHead>
            <TableHead>Bolsa</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems != null ? cartItems.map((item) => (
            <TableRow key={item.cartID}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-bold">
                {item.title}
              </TableCell>
              <TableCell>{item.sizeName}</TableCell>
              <TableCell>{item.sizeBagString}</TableCell>
              <TableCell>
                <Button onClick={() => removeFromCart(item)}>
                  -
                </Button>
              </TableCell>
            </TableRow>
          )) : "El carrito esta vacio"}
        </TableBody>
      </Table></section></div>)
}
