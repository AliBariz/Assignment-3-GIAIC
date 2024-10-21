"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home(){
 return(
   <center>
   <h1 className="text-4xl text-center hover:underline">Navbar page</h1>

   <h1 className="text-2xl text-center mt-24">About This Assignment: <p className="flex">This is a assignment of GIAIC where we have to create four routes About, Contact, Navbar and Footer using the Link tag.</p></h1>
   <Button asChild className="mt-40">
      <Link href="/">Home Page</Link>
    </Button>
   </center>

  )
 };