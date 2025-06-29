"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const CARS = [
  {
    img: `${getImagePrefix()}image/car1.jpg`,
    title: "Toyota Avanza 2022",
    desc: "Mobil keluarga irit bahan bakar, cocok untuk perjalanan jauh maupun harian.",
    price: "Rp 230.000.000",
    contact: "+62 812-3456-7890",
  },
  {
    img: `${getImagePrefix()}image/car2.jpg`,
    title: "Honda Civic RS",
    desc: "Sedan sporty dengan performa mesin tinggi dan desain elegan.",
    price: "Rp 540.000.000",
    contact: "+62 812-9876-5432",
  },
  {
    img: `${getImagePrefix()}image/car3.jpg`,
    title: "Suzuki Ertiga Hybrid",
    desc: "MPV ramah lingkungan dengan teknologi hybrid terbaru.",
    price: "Rp 280.000.000",
    contact: "+62 813-2222-3333",
  },
  {
    img: `${getImagePrefix()}image/car4.jpg`,
    title: "Mitsubishi Xpander Cross",
    desc: "SUV crossover tangguh untuk segala medan dengan fitur modern.",
    price: "Rp 315.000.000",
    contact: "+62 811-4455-6677",
  },
  {
    img: `${getImagePrefix()}image/car5.jpg`,
    title: "Daihatsu Terios 2023",
    desc: "SUV tangguh dengan kabin luas dan ground clearance tinggi.",
    price: "Rp 275.000.000",
    contact: "+62 812-1234-5678",
  },
  {
    img: `${getImagePrefix()}image/car6.jpg`,
    title: "Toyota Fortuner GR Sport",
    desc: "SUV premium dengan tampilan gagah dan fitur canggih.",
    price: "Rp 630.000.000",
    contact: "+62 822-1111-9999",
  },
  {
    img: `${getImagePrefix()}image/car7.jpg`,
    title: "Hyundai Ioniq 5",
    desc: "Mobil listrik futuristik dengan daya jelajah tinggi.",
    price: "Rp 820.000.000",
    contact: "+62 838-8888-0000",
  },
  {
    img: `${getImagePrefix()}image/car8.jpg`,
    title: "Wuling Almaz RS",
    desc: "SUV dengan teknologi voice command berbahasa Indonesia.",
    price: "Rp 365.000.000",
    contact: "+62 819-7777-4444",
  },
];

export function Projects() {
  return (
    <section id="mobil-dijual" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Daftar Mobil Dijual
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Temukan mobil impian Anda dari berbagai merek dan tipe dengan harga dan layanan terbaik.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {CARS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
