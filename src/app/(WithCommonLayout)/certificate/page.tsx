'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CertificateType {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

const Certificate = () => {
  const certificateData: CertificateType[] = [
    {
      id: '1nRPrVxOIIVWv-bLYg-stR7nLzfkRFK8w',
      name: 'Full stack web development course',
      subtitle:
        'Completed Full stack Web Development Course with Programming Hero',
      image: 'https://res.cloudinary.com/dluuillmt/image/upload/v1748052928/level_2_certificate_page-0001_wgz2kt.jpg',
    },
    {
      id: '1nRPrVxOIIVWv-b5LYg-stR7nLzfkRFK8w',
      name: 'Mern stack web development course',
      subtitle:
        'Completed Full stack Web Development Course with Programming Hero',
      image: 'https://i.ibb.co/pxkhpct/certificate-page-0001.jpg',
    },

    {
      id: '1nRPrVxOIIVWv-bLYg-stR7nLzfkRFK8',
      name: 'Responsive web design course',
      subtitle:
        'Completed Responsive web design Video course Elearn DB in Bangladesh',
      image: 'https://i.ibb.co/VWTrC36/web-design.jpg',
    },
    {
      id: '1nRPrVxOIIVWv-bLYg-stR7nLzfkRFK9',
      name: 'Programming Hero Language Club',
      subtitle: 'Completed Programming Hero Language Club in Bangladesh',
      image:
        'https://i.ibb.co.com/dGW4PyT/Shahsultan-Islam-Joy-page-0001.jpg',
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);

  const handleClickToOpen = (certificate: CertificateType) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div>
      <div className="flex gap-2 sm:flex-wrap-reverse mt-24">
        {certificateData.map((certificate) => (
          <div
            key={certificate.id}
            className="mx-auto max-w-[350px] space-y-4 rounded-lg p-6 shadow-lg md:w-[350px] bg-[#222D56] mb-4"
          >
            <img
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={
                certificate.image ||
                'https://source.unsplash.com/200x200/?certificate'
              }
              alt={certificate.name}
            />
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold text-white">
                {certificate.name}
              </h1>
              <p className="text-sm text-[#94a1cf]">{certificate.subtitle}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => handleClickToOpen(certificate)}
                className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base"
              >
                Show Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="relative bg-white rounded-lg p-4 max-w-3xl w-full">
            <button
              onClick={handleToClose}
              className="absolute text-red-500 bg-black w-8 h-8 flex items-center justify-center rounded-full text-xl top-2 right-2"
            >
              &times;
            </button>
            <Image
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              fill
              className="h-auto w-full rounded"
            />
            <h2 className="mt-4 text-center text-lg font-semibold text-black">
              {selectedCertificate.name}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
