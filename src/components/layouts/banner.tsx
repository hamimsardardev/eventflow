import React from "react";
import Container from "./Container";
import Link from "next/link";

const Banner = () => {
  return (
   
      <div className="bg-gradient-to-b from-[#181E3B] to-[#211C35]">
        <Container>
          <div className="text-center py-16">
            <h1 className="text-[88px] font-[700] text-secondary font-manrope leading-[88px] w-[850px] text-center mx-auto">
              Find an event{" "}
              <span className="font-[88px] font-normal font-space-grotesk leading-[88px] text-[#B6F06E]">
                worth showing up
              </span>{" "}
              for
            </h1>
            <p className="text-[24px] text-[#FFFFFF] font-[400] leading-[36px] w-[850px] text-center mx-auto mt-4">
              Workshops, seminars, hackathons, meetups and competitions — all in
              one place, with real-time seat availability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 mx-auto justify-center">
              <Link
                href="/events"
                className="rounded-lg border border-white/40 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10 hover:text-secondary"
              >
                Browse all events
              </Link>
              <Link
                href="/my-registration"
                className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary/10 "
              >
                My registrations
              </Link>
            </div>
          </div>
        </Container>
      </div>
    
  );
};

export default Banner;
