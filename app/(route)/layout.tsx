import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative f-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section className=" f-col min-h-screen flex-1 px-4 sm:px-14">
          <div className="mx-auto f-col w-full max-2-5xl max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" alt="Logo" width={30} height={30} />
              <MobileNav />
            </div>
            <div className="f-col md:pb-14">
              Toaster (notification popups)
              {children}
            </div>
          </div>
        </section>

        <RightSidebar />
      </main>
    </div>
  );
}
