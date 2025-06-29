"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section id="kontak" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Hubungi Kami
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Tertarik dengan salah satu mobil kami? Ingin menjadwalkan test drive atau
          konsultasi pembelian? Silakan isi formulir di bawah ini, tim kami akan
          menghubungi Anda secepatnya.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            {/* Informasi Kontak */}
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Informasi Kontak
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-400"
              >
                Isi formulir atau hubungi kami langsung melalui nomor dan email berikut.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +62 822-535-3523
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  kongdigong@mail.com
                </Typography>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <MapPinIcon className="h-6 w-6 text-white mt-1" />
                <Typography variant="small" color="white">
                  Jalan Raya Otomotif No. 123,<br />
                  Jakarta Selatan, Indonesia
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <ClockIcon className="h-6 w-6 text-white mt-1" />
                <Typography variant="small" color="white">
                  Buka setiap hari: 09.00 – 18.00 WIB
                </Typography>
              </div>
            </div>

            {/* Formulir */}
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nama Lengkap"
                    name="name"
                    placeholder="Contoh: Budi Santoso"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nomor Telepon"
                    name="phone"
                    placeholder="Contoh: 0812xxxxxxx"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>

                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="Contoh: budi@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />

                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  Apa yang Anda butuhkan?
                </Typography>
                <div className="-ml-3 mb-14">
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interest" label="Ingin membeli mobil baru" defaultChecked />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interest" label="Mencari mobil bekas" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interest" label="Test drive" />
                </div>

                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Pesan Anda"
                  name="message"
                  placeholder="Tulis pertanyaan atau permintaan Anda di sini..."
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />

                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md">
                    Kirim Pesan
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
