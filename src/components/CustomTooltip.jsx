import React from "react";
// import { Button } from "@/components/ui/button";
import Button from "./Button"; // ✅ apna button import karo


const CustomTooltip = ({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
}) => {
  return (
    <div
      {...tooltipProps}
      className="rounded-2xl shadow-2xl backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border border-white/20 p-6 max-w-sm w-full text-center"
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
        {step.title || "Tour Step"}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
        {step.content}
      </p>

      <div className="flex justify-between items-center">
        {index > 0 && (
          <Button
            variant="outline"
            {...backProps}
            className="rounded-full px-4 py-1 shadow-sm"
          >
            Back
          </Button>
        )}

        {continuous ? (
          <Button
            {...primaryProps}
            className="rounded-full px-6 py-2 shadow-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            Next
          </Button>
        ) : (
          <Button
            {...closeProps}
            className="rounded-full px-6 py-2 shadow-md bg-green-600 hover:bg-green-700 text-white"
          >
            Finish
          </Button>
        )}
      </div>
    </div>
  );
};

export default CustomTooltip;
