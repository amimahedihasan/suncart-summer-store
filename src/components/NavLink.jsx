'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    return (
        <Link href={href} className={pathName == href ? "text-blue-500 border-b-2" : ""}>
            {children}
        </Link>
    );
};

export default NavLink;