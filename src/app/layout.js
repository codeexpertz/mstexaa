import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/components/ProgressBarProvider";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Mstexa",
  description: "Mstexa Freelancing Services",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-[99.6vw] overflow-hidden">
            {/* <Link
           
            href="https://wa.me/+923446743886?text=Hello%20there"
            className="fixed bottom-4 right-4 z-10 cursor-pointer"
          >
            <Image src="/whatsapp.png" alt="sas" width={60} height={60} />
          </Link> */}
            <Navbar />
            {children}
            <div className="relative py-6 z-10 ">
              {/* Decorative background image anchored to top-left */}
              {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-50 inset-0"
        >
          <img
            src="/footershape.png"
            alt=""
            className="absolute right-0 bottom-0 w-[520px] md:h-[40vh] max-w-[50vw] "
          />
        </div> */}

              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
