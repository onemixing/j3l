import { Toaster } from "@/components/ui/sonner"
export default function Layout({children}){
    return <div className="container mx-auto">
        {children}
        <Toaster />
    </div>
}