("use client");

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import F1 from "../../assets/Photos/F1.png";
import F2 from "../../assets/Photos/F2.png";
import F3 from "../../assets/Photos/F3.png";
import F4 from "../../assets/Photos/F4.png";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip as ChartTooltip,
  YAxis,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import api from "@/api";

const HomeView = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { data: sale } = api.sale?.getallsale.useQuery() ?? {};

  const { data: user } = api.user?.getalluser.useQuery() ?? {};

  const barChartConfig = {
    price: {
      label: "totalPrice",
      color: "hsl(var(--chart-1))",
    },
    profit: {
      label: "totalProfit",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <div className="p-6 min-h-screen bg-cover bg-center">
      <h1 className="text-3xl font-semibold text-center text-gray-600 flex justify-center mb-5">
        Welcome to the Dashboard
      </h1>

      {/* YouTube Vd */}
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

      {/* Bar Chart */}
      <div className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-center items-center text-lg font-semibold">
              📊 Sales Report Bar Chart
            </CardTitle>
          </CardHeader>
          <CardContent>
            {sale ? (
              <ChartContainer config={barChartConfig}>
                <BarChart
                  data={sale}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="createdDate"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip
                    cursor={{ fill: "rgba(0,0,0,0.1)" }}
                    content={
                      <ChartTooltipContent
                      // indicator="solid"
                      />
                    }
                  />
                  <Legend />
                  <Bar
                    dataKey="totalProfit"
                    fill="#4F46E5"
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    dataKey="totalPrice"
                    fill="#EC4899"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            ) : (
              <div className="text-center text-gray-500">
                Loading sales data...
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center">
        <div>
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
                            src={F1}
                            alt="Photo"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        )}
                        {index % 4 === 1 && (
                          <img
                            src={F2}
                            alt="Photo"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        )}
                        {index % 4 === 2 && (
                          <img
                            src={F3}
                            alt="Photo"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        )}
                        {index % 4 === 3 && (
                          <img
                            src={F4}
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
        {/* Pie Chart */}
        <div></div>
      </div>
    </div>
  );
};

export default HomeView;
