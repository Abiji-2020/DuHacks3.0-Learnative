import { Button } from "./ui/button";
import {Menu} from "lucide-react";
import MobileSidebar from "@/components/mobile-sidebar";

const NavBar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl ="/"/>
            </div>
        </div>
    );
}
 export default NavBar;
