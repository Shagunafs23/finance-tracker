"use client";
import React, { useEffect } from 'react';
import Link from 'next/link'; // Import Link
import Image from "next/image";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

function SideNav() {
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard',
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets',
        },
        {
            id: 3,
            name: 'Expenses & Income',
            icon: ReceiptText,
            path: '/dashboard/expenses',
        },
        {
            id: 4,
            name: 'Upgrade',
            icon: ShieldCheck,
            path: '/dashboard/upgrade',
        },
        {
            id: 5,
            name: 'Finance Tracker',
            icon: ShieldCheck,
            path: '/dashboard/FinanceTracker',
        }
    ];

    const path = usePathname(); // Get current pathname

    useEffect(() => {
        console.log(path); // Log the current path
    }, [path]);

    return (
        <div className="h-screen p-5 border shadow-sm bg-gray-800 text-white">
            <Image 
                src="/logo.svg" 
                alt="logo" 
                width={160} 
                height={100} 
            />
            <div className="mt-5">
                {menuList.map((menu, index) => (
                    <Link href={menu.path} key={menu.id}>
                        <h2 className={`flex gap-2 items-center text-300 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-700 dark:text-gray-300 dark:hover:bg-blue-600 ${path == menu.path && 'text-primary bg-blue-100 dark:text-primary dark:bg-blue-800'}`}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className="fixed bottom-10 p-5 flex gap-2 items-center">
                <UserButton />
                Profile
            </div>
        </div>
    );
}

export default SideNav;
