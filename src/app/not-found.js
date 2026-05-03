"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaHome, FaArrowLeft, FaExclamationCircle } from "react-icons/fa";

const NOtFoundPage = () => {
    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {/* Animated Icon Section */}
        <div className="flex justify-center mb-8">
          <div className="p-8 bg-danger-50 rounded-full animate-pulse">
            <FaExclamationCircle className="text-danger-500 text-7xl" />
          </div>
        </div>

        {/* Error Details */}
        <h1 className="text-9xl font-black text-default-200 tracking-tighter">404</h1>
        <h2 className="text-4xl font-bold mt-4 mb-3 text-default-900">Page Not Found</h2>
        <p className="text-default-500 max-w-lg mx-auto mb-10 text-lg">
          Oops! The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            as={Link}
            href="/"
            color="primary"
            size="lg"
            variant="shadow"
            startContent={<FaHome />}
            className="font-bold px-8"
          >
            Back to Home
          </Button>
          
          <Button
            onClick={() => window.history.back()}
            variant="flat"
            color="default"
            size="lg"
            startContent={<FaArrowLeft />}
            className="font-bold px-8"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
    );
};

export default NOtFoundPage;