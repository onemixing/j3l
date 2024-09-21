/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DdF3AwLqf4A
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import piezas from "./api/products.json";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

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
  DialogFooter,
  DialogClose,
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
export default function Page() {
  const products = piezas;
  const [cartItems, setCartItems] = useState(cartLocalStorage);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    toast(
      "+" +
        product.quantity +
        " bolsas " +
        product.sizeName +
        " '" +
        product.sizeBagString +
        "' agregadas"
    );
    setQuantity(1);
  };

  //-----
  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div>
      <div className="container px-2 md:px-6">
        <section className="bg-background py-4">
          <div className="btnControls w-full flex align-center justify-center">
            {/*}
        {cartItems.length != 0 ? (
          <Button className="mr-2">
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
          <Button className="mr-2" disabled>
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
        )}{*/}
            <a href="/cart">
              <Button variant="outline">
                Ver Carrito<Badge className="ml-2">{cartItems.length}</Badge>
              </Button>
            </a>
          </div>

          <div className="container px-4 md:px-6">
            <div className="grid  gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:gap-4 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-start gap-4 rounded-lg bg-card p-6 shadow-sm"
                >
                  <Image
                    src={"/productsImgs/" + product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full aspect-square"
                  />
                  <div className="grid gap-2">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                  </div>
                  {product.type == "Termofusion" ? (
                    <Badge className="bg-emerald-600">{product.type}</Badge>
                  ) : (
                    ""
                  )}
                  {product.type == "Mixta" ? (
                    <Badge className="bg-gradient-to-r from-emerald-600 to-orange-800">
                      {product.type}
                    </Badge>
                  ) : (
                    ""
                  )}
                  {product.type == "Polipropileno" ? (
                    <Badge className="bg-orange-800">{product.type}</Badge>
                  ) : (
                    ""
                  )}
                  <Link href="#" className="mt-auto w-full" prefetch={false}>
                    {/*Medidas*/}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">Medidas</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Selecciona la medida de la pieza:{" "}
                            <span className="font-bold">{product.title}</span>
                          </DialogTitle>
                          <DialogDescription>
                            <Table className="mt-8">
                              {/*}
                            <TableCaption>
                              A list of your recent invoices.
                            </TableCaption>{*/}
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="font-bold w-[100px]">
                                  Medida
                                  </TableHead>
                                  <TableHead className="font-bold">
                                  Grande
                                  </TableHead>
                                  <TableHead className="font-bold">
                                  Mini
                                  </TableHead>
                                  <TableHead className="font-bold">
                                  A Granel
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {product.sizes.map((size) => (
                                  <TableRow key={size.name}>
                                    <TableCell className="font-medium">
                                      {size.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge>{size.sizes[0]}</Badge>
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            className="font-bold"
                                          >
                                            +
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md">
                                          <DialogHeader>
                                            <DialogTitle>Cantidad</DialogTitle>
                                            <DialogDescription>
                                              Seleccione la cantidad de bolsas.
                                            </DialogDescription>
                                          </DialogHeader>
                                          <div className="flex items-center space-x-2">
                                            <Button
                                              variant="ghost"
                                              onClick={minusQuantity}
                                            >
                                              -
                                            </Button>
                                            <div className="grid flex-1 gap-2">
                                              <Input
                                                id="link"
                                                defaultValue={quantity}
                                                readOnly
                                                type="number"
                                                value={quantity}
                                              />
                                            </div>
                                            <Button
                                              variant="ghost"
                                              onClick={plusQuantity}
                                            >
                                              +
                                            </Button>
                                          </div>
                                          <DialogClose asChild>
                                            <Button
                                              onClick={() =>
                                                addToCart({
                                                  cartID:
                                                    product.id + size.sizes[0],
                                                  id: product.id,
                                                  image: product.image,
                                                  title: product.title,
                                                  sizeName: size.name,
                                                  sizeBag: size.sizes[0],
                                                  sizeBagString: "Grande",
                                                  code: size.codes[0],
                                                  quantity: quantity,
                                                  type: product.type,
                                                })
                                              }
                                            >
                                              Aceptar
                                            </Button>
                                          </DialogClose>
                                        </DialogContent>
                                      </Dialog>
                                    </TableCell>
                                    <TableCell>
                                      <Badge>{size.sizes[1]}</Badge>
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            className="font-bold"
                                          >
                                            +
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md">
                                          <DialogHeader>
                                            <DialogTitle>Cantidad</DialogTitle>
                                            <DialogDescription>
                                              Seleccione la cantidad de bolsas.
                                            </DialogDescription>
                                          </DialogHeader>
                                          <div className="flex items-center space-x-2">
                                            <Button
                                              variant="ghost"
                                              onClick={minusQuantity}
                                            >
                                              -
                                            </Button>
                                            <div className="grid flex-1 gap-2">
                                              <Input
                                                id="link"
                                                defaultValue={quantity}
                                                readOnly
                                                type="number"
                                                value={quantity}
                                              />
                                            </div>
                                            <Button
                                              variant="ghost"
                                              onClick={plusQuantity}
                                            >
                                              +
                                            </Button>
                                          </div>
                                          <DialogClose asChild>
                                            <Button
                                              onClick={() =>
                                                addToCart({
                                                  cartID:
                                                    product.id + size.sizes[1],
                                                  id: product.id,
                                                  image: product.image,
                                                  title: product.title,
                                                  sizeName: size.name,
                                                  sizeBag: size.sizes[1],
                                                  sizeBagString: "Mini",
                                                  code: size.codes[1],
                                                  quantity: quantity,
                                                  type: product.type,
                                                })
                                              }
                                            >
                                              Aceptar
                                            </Button>
                                          </DialogClose>
                                        </DialogContent>
                                      </Dialog>
                                    </TableCell>
                                    <TableCell>
                                      <Badge>{size.sizes[2]}</Badge>
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            className="font-bold"
                                          >
                                            +
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md">
                                          <DialogHeader>
                                            <DialogTitle>Cantidad</DialogTitle>
                                            <DialogDescription>
                                              Seleccione la cantidad de bolsas.
                                            </DialogDescription>
                                          </DialogHeader>
                                          <div className="flex items-center space-x-2">
                                            <Button
                                              variant="ghost"
                                              onClick={minusQuantity}
                                            >
                                              -
                                            </Button>
                                            <div className="grid flex-1 gap-2">
                                              <Input
                                                id="link"
                                                defaultValue={quantity}
                                                readOnly
                                                type="number"
                                                value={quantity}
                                              />
                                            </div>
                                            <Button
                                              variant="ghost"
                                              onClick={plusQuantity}
                                            >
                                              +
                                            </Button>
                                          </div>
                                          <DialogClose asChild>
                                            <Button
                                              onClick={() =>
                                                addToCart({
                                                  cartID:
                                                    product.id + size.sizes[2],
                                                  id: product.id,
                                                  image: product.image,
                                                  title: product.title,
                                                  sizeName: size.name,
                                                  sizeBag: size.sizes[2],
                                                  sizeBagString: "A Granel",
                                                  code: size.codes[2],
                                                  quantity: quantity,
                                                  type: product.type,
                                                })
                                              }
                                            >
                                              Aceptar
                                            </Button>
                                          </DialogClose>
                                        </DialogContent>
                                      </Dialog>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    {/*}<Button size="lg" className="w-full">
                    Get Quote
                  </Button>{*/}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
