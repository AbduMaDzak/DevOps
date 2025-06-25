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
      title: "Frontend Web Development",
      message:
        "Working with this team was seamless! The website they delivered is fast, responsive, and beautifully designed. They truly understood our vision and brought it to life.",
      name: "Sarah Johnson - Project Manager",
    },
    2: {
      title: "UI/UX & Product Design",
      message:
        "Their design work is intuitive and elegant. We saw a major improvement in user engagement after the redesign. Highly recommended for any UI/UX project.",
      name: "David Kim - Lead Designer",
    },
    3: {
      title: "Mobile App Development",
      message:
        "I had the pleasure of working with Lily on a critical mobile app project. Her attention to detail and technical skills exceeded all expectations.",
      name: "Michael - Technical Manager",
    },
  };

  const { title, message, name } = testimonials[active];

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            My Team
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Meet the talented professionals who power every project we build.
            From design to development, each member brings expertise, passion,
            and innovation to the table.
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
