"use client";

import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

type TestimonialKey = 1 | 2 | 3;

type TestimonialData = {
  title: string;
  message: string;
  name: string;
};

export function Testimonial() {
  const [active, setActive] = React.useState<TestimonialKey>(1);

  const testimonials: Record<TestimonialKey, TestimonialData> = {
        1: {
      title: "Senior Sales Consultant",
      message:
        "Mengutamakan pelayanan ramah dan profesional, saya akan mendampingi Anda dalam setiap proses pembelian mobil dengan nyaman dan aman.",
      name: "Rina Marlina",
    },
    2: {
      title: "Sales Executive - Toyota Specialist",
      message:
        "Dengan pengalaman lebih dari 5 tahun, saya siap membantu Anda menemukan mobil Toyota terbaik sesuai kebutuhan dan budget Anda.",
      name: "Andi Pratama",
    },
    3: {
      title: "Marketing & Trade-In Expert",
      message:
        "Saya tidak hanya membantu Anda membeli mobil baru, tapi juga menilai mobil lama Anda dengan harga yang kompetitif.",
      name: "Budi Santoso",
    },
  };

  const { title, message, name } = testimonials[active];

  return (
    <section id="tim" className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Tim Penjualan Kami
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Kenali tim profesional kami yang siap membantu Anda dalam setiap langkah pembelian mobil. Komitmen kami adalah memberikan layanan terbaik untuk kepuasan Anda.
          </Typography>
        </div>

        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {title}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {message}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {name}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
              </Typography>

              <div className="flex items-center gap-4">
                {[1, 2, 3].map((num) => (
                  <React.Fragment key={num}>
                    <Avatar
                      variant="rounded"
                      src={`${getImagePrefix()}image/avatar${num}.jpg`}
                      alt={`avatar-${num}`}
                      size="sm"
                      className={`cursor-pointer transition-opacity ${
                        active === num ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActive(num as TestimonialKey)}
                    />
                    {num < 3 && (
                      <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
