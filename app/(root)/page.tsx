import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0 ">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Sports Wahala? No More! Manage Events Effortlessly
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              From team registrations to match day updates—organize, track, and
              enjoy stress-free sports events all in one place!🚀⚽🔥
            </p>
            <Button className="button w-full sm:w-fit" size="lg" asChild>
              <Link href="#events">Get Started</Link>
            </Button>
          </div>

          <Image
            className="max-h-[70vh] object-cover object-center 2xl:max-h-[50vh] "
            src="/assets/images/barcelona.jpg"
            width={1000}
            height={1000}
            alt="hero-image"
          />
        </div>
      </section>
    </>
  );
}
