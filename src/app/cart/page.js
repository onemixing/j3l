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
const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");
export default function Cart() {
  const [cartItems, setCartItems] = useState(cartLocalStorage);
  const deleteCart = () => {
    localStorage.removeItem("cartList");
    window.location.reload();
  };
  const cotizarWsp = () => {
    var i;
    var textToSend = "Hola J3L! Me gustaria cotizar las siguientes piezas: %0A";
    for (i = 0; i < cartItems.length; i++){
      var emoticonPieza = "";
      if(cartItems[i].type == "Termofusion"){
        emoticonPieza = "`f`";
      }else if(cartItems[i].type == "Polipropileno"){
        emoticonPieza = "`p`";
      }else if(cartItems[i].type == "Mixta"){
        emoticonPieza = "`m`";
      }
      textToSend = textToSend + "%0A*" + emoticonPieza + " " + cartItems[i].title + " " + cartItems[i].sizeName +" "+cartItems[i].sizeBagString + "*("+cartItems[i].sizeBag+") | cantidad: *"+ cartItems[i].quantity +"* | codigo: " + cartItems[i].code;
    }
    const num1 = 541164467398;
    //window.location.href = "https://wa.me/"+num1+"?text="+textToSend;
    window.open("https://wa.me/"+num1+"?text="+textToSend, '_blank');

  }
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <div className="container px-4 md:px-6">
        <section className="bg-background py-4">
          <Link href="/">
            <Button variant="outline">Volver</Button>
          </Link>
          {cartItems.length != 0 ? (
            <Button className="ml-2" onClick={cotizarWsp}>
              Enviar a cotizar
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className="ml-2"
              >
                <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </Button>
          ) : (
            <Button className="ml-2" disabled>
              Enviar a cotizar
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className="ml-2"
              >
                <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </Button>
          )}

          <Dialog>
            <DialogTrigger asChild>
            <Button className="ml-2 bg-red-500">
                Limpiar carrito
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">Estas seguro?</DialogTitle>
                <DialogDescription className="text-center">
                  Se removeran todas piezas añadidas al carrito.
                </DialogDescription>
                <Button className="ml-2 bg-red-500 w-full" onClick={deleteCart}>
                Limpiar carrito
              </Button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <Table>
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Medida</TableHead>
                <TableHead>Bolsa</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Codigo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems != null
                ? cartItems.map((item) => (
                    <TableRow key={item.cartID}>
                      <TableCell>
                        <Avatar>
                          <AvatarImage
                            src={"/productsImgs/" + item.image}
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-bold">{item.title}</TableCell>
                      <TableCell>{item.sizeName}</TableCell>
                      <TableCell>
                        {item.sizeBagString} <Badge>{item.sizeBag}</Badge>
                      </TableCell>
                      <TableCell>{item.quantity} Bolsas</TableCell>
                      <TableCell>{item.code}</TableCell>
                    </TableRow>
                  ))
                : "El carrito esta vacio"}
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
}
