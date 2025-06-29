import { Typography, Button } from "@material-tailwind/react";

const LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Mobil Dijual", href: "#mobil-dijual" },
  { name: "Tim Penjualan Kami", href: "#tim" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal text-gray-700">
            &copy; {CURRENT_YEAR} KongDigong Auto. All rights reserved.
          </Typography>
          <ul className="flex gap-6 items-center">
            {LINKS.map(({ name, href }) => (
              <li key={name}>
                <Typography
                  as="a"
                  href={href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {name}
                </Typography>
              </li>
            ))}
            <a href="#kontak">
              <Button color="gray" size="sm">Hubungi Kami</Button>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
