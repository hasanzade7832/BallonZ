import React, { useEffect, useRef } from "react";
import { createChart, UTCTimestamp } from "lightweight-charts";

const ChartComponent = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null); // نگهداری ارجاع به چارت برای دسترسی مجدد

  useEffect(() => {
    if (!chartContainerRef.current) {
      return;
    }

    const initialData = [
      { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 as UTCTimestamp },
      { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 as UTCTimestamp },
      { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 as UTCTimestamp },
      { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 as UTCTimestamp },
      { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 as UTCTimestamp },
      { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 as UTCTimestamp },
      { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 as UTCTimestamp },
      { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 as UTCTimestamp },
      { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 as UTCTimestamp },
    ];

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "white" },
        textColor: "#333",
        fontSize: 12,
      },
      grid: {
        vertLines: { color: "#f0f0f0" },
        horzLines: { color: "#f0f0f0" },
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight || 400,
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#75b6a8",
      downColor: "#e57373",
      borderVisible: false,
      wickUpColor: "#75b6a8",
      wickDownColor: "#e57373",
    });

    candleSeries.setData(initialData);

    const movingAverageData = initialData.map((dataPoint, index) => {
      const slice = initialData.slice(Math.max(0, index - 4), index + 1);
      const average = slice.reduce((sum, point) => sum + point.close, 0) / slice.length;
      return { time: dataPoint.time, value: average };
    });

    const movingAverageSeries = chart.addLineSeries({
      color: "#648dae",
      lineWidth: 1,
    });

    movingAverageSeries.setData(movingAverageData);

    chart.priceScale("left").applyOptions({
      borderColor: "#d9d9d9",
    });

    chart.timeScale().applyOptions({
      borderColor: "#d9d9d9",
      rightOffset: 10,
    });

    chart.timeScale().scrollToRealTime();
    chart.timeScale().fitContent();

    chartRef.current = chart; // نگهداری ارجاع به چارت برای دسترسی آینده

    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current?.clientWidth,
          height: chartContainerRef.current?.clientHeight || 400,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (chartRef.current) {
        // به جای استفاده از متد dispose، چارت را پاکسازی می‌کنیم
        chartRef.current.remove();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="w-full h-[550px] min-h-[400px] bg-gray-50 rounded shadow-sm p-4"
    ></div>
  );
};

export default ChartComponent;
