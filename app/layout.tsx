import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "F1 Rewind",
  description: "Watch past F1 races, join discussions & run fantasy picks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
