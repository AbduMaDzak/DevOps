import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Phone } from "lucide-react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  price?: string;
  contact?: string;
}

export function ProjectCard({ img, title, desc, price, contact }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-2 font-normal !text-gray-500">
          {desc}
        </Typography>
        {price && (
          <Typography className="mb-2 font-semibold text-blue-600">
            Harga: {price}
          </Typography>
        )}
        {contact && (
          <div className="flex items-center text-sm text-gray-700 mb-4">
            <Phone className="w-4 h-4 mr-2" />
            <span>{contact}</span>
          </div>
        )}
        <Button color="gray" size="sm">
          Lihat Detail
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
