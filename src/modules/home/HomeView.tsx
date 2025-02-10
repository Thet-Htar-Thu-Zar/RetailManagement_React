("use client");

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Label, Pie, PieChart, Cell } from "recharts";

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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import api from "@/api";
import { DotLottiePlayer } from "@dotlottie/react-player";

const HomeView = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { data: sale } = api.sale?.getallsale.useQuery() ?? {};

  const { data: stock } = api.product?.fetchStocks.useQuery() ?? {};

  const { data: summary } = api.sale?.getsalesummary.useQuery() ?? {};

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

  const pieChartConfig = {
    userName: {
      label: "Users",
    },
    amount: {
      label: "amount",
      color: "hsl(var(--chart-2))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const totalusers = React.useMemo(() => {
    return (user ?? []).length;
  }, []);

  const colorArray = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];

  return (
    <div className="p-6 min-h-screen bg-cover bg-center">
      <h1 className="text-3xl font-semibold text-center text-gray-600 flex justify-center mb-7">
        Welcome to the Dashboard
        <DotLottiePlayer
          src="https://lottie.host/e43dde6f-0aaf-4816-bd8c-956d046268b3/KASRkwTmpq.lottie"
          autoplay
          loop
          className="w-10 h-10"
        />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className=" shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Sale Profit💸
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            ${summary?.totalSaleProfit ?? 0}{" "}
          </p>
        </div>
        <div className=" shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Sale Revenue💵
          </h2>
          <p className="text-3xl font-bold text-green-600">
            ${summary?.totalSaleRevenue}
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Sale Count🛍
          </h2>
          <p className="text-3xl font-bold text-yellow-600">{sale?.length}</p>
        </div>
        <div className=" shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Product Count🍱
          </h2>
          <p className="text-3xl font-bold text-red-600">{stock?.length}</p>
        </div>
      </div>

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
      <div className="flex items-center justify-center mb-10">
        <div className="">
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
      </div>

      {/* Pie Chart */}
      <div>
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle className="flex justify-center items-center text-lg font-semibold">
              📋 Pie Chart for Total User_List and Amount
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0 ">
            <ChartContainer
              config={pieChartConfig}
              className="mx-auto aspect-square max-h-[650px] "
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={user}
                  dataKey="amount"
                  nameKey="userName"
                  innerRadius={60}
                  strokeWidth={5}
                  label
                >
                  {user?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colorArray[index % colorArray.length]}
                    />
                  ))}
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalusers.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Users
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeView;
