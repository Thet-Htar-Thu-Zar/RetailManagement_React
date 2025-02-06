import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeView = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="p-6 min-h-screen bg-cover bg-center">
      <h1 className="text-3xl font-semibold text-center text-gray-600 flex justify-center mb-5">
        Welcome to the Dashboard
      </h1>

      <div className="flex items-center justify-center mb-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bH8zxnUeZLg?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="ml-40 text-gray-700 bg-gradient-to-r from-red-100 to-blue-300 p-10 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Basic Add-ins</h3>
          <ul className="list-disc list-inside">
            <li>Chocolate🍫</li>
            <li>Strawberry🍓</li>
            <li>Caramel🧉</li>
            <li>Vanilla🥫</li>
            <li>Mint🧂</li>
            <li>Peanut Butter🧀</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {/* <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        v-if="index % 4 === 0"
                        src="../"
                        alt="Photo"
                        className="w-70 h-30 object-cover rounded-lg"
                      />
                      <img
                        v-else-if="index % 4 === 1"
                        src="../../assets/Photos/F2.png"
                        alt="Photo"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <img
                        v-else-if="index % 4 === 2"
                        src="../../assets/Photos/F3.png"
                        alt="Photo"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <img
                        v-else
                        src="../../assets/Photos/F4.png"
                        alt="Photo"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {index % 4 === 0 && (
                        <img
                          src={"../../assets/Photos/F1.png"}
                          alt="Photo"
                          className="w-70 h-30 object-cover rounded-lg"
                        />
                      )}
                      {index % 4 === 1 && (
                        <img
                          src="../../assets/Photos/F2.png"
                          alt="Photo"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                      {index % 4 === 2 && (
                        <img
                          src="../../assets/Photos/F3.png"
                          alt="Photo"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                      {index % 4 === 3 && (
                        <img
                          src="../../assets/Photos/F4.png"
                          alt="Photo"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeView;
