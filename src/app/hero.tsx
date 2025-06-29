"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Temukan Mobil Impian Anda di KongDigong Auto
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Jual beli mobil baru dan bekas berkualitas, dari berbagai merek ternama seperti Toyota, Honda, Mitsubishi, dan lainnya. Dapatkan penawaran terbaik dan proses mudah hanya di KongDigong Auto.
          </Typography>
          <Button color="blue" className="mt-4">
            Lihat Daftar Mobil
          </Button>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="showroom mobil"
          src={`${getImagePrefix()}image/showroom.jpg`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
