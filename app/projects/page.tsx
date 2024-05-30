import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";
import airbnb from "../../public/air.png"
import eventlist from "../../public/ev1.png"
import ab from "../../public/ab.png"
import amazon from "../../public/amazon.png"

async function getData() {
  const query = `*[_type == 'project'] {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
      }`;

  const data = await client.fetch(query);
  return data;
}
export default async function ProjectPage() {
  const data: ProjectsCard[] = await getData();
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="mt-2 text-muted-foreground leading-7">
        Checkout what projects I have created
      </p>
      <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {/* {data.map((item) => ( */}
          <a
            href="https://evently-ochre.vercel.app/"
            
            className="group block"
            target="_blank"
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
              <Image
                src={eventlist}
                alt="Image Description"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg hover:underline">
                {/* {item.title} */} Evently
              </h2>
              <p className="text-muted-foreground mt-1 line-clamp-3">
                {/* {item.description} */} Event Organizing website
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* {item.tags.map((tagItem, index) => (
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {tagItem}
                  </span>
                ))} */}
                 <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */}NextJs
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */} React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */} Tailwind
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */}Kinde Auth
                  </span>
              </div>
            </div>
          </a>

          <a
            href="https://next-js-travel-booking-bnb.vercel.app/"
            
            className="group block"
            target="_blank"
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
              <Image
                src={ab}
                alt="Image Description"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg hover:underline">
                {/* {item.title} */} Airbnb 
              </h2>
              <p className="text-muted-foreground mt-1 line-clamp-3">
                {/* {item.description} */} Online marketplace for short- and long-term homestays and experiences
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* {item.tags.map((tagItem, index) => (
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {tagItem}
                  </span>
                ))} */}
                 <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */}NextJs
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */} React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */} Tailwind
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */}Kinde Auth
                  </span>
              </div>
            </div>
          </a>

          <a
            href="https://amazon-redux-stripe-complete.vercel.app/"
            
            className="group block"
            target="_blank"
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
              <Image
                src={amazon}
                alt="Image Description"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg hover:underline">
                {/* {item.title} */} Airbnb 
              </h2>
              <p className="text-muted-foreground mt-1 line-clamp-3">
                {/* {item.description} */} Online marketplace for short- and long-term homestays and experiences
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* {item.tags.map((tagItem, index) => (
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {tagItem}
                  </span>
                ))} */}
                 <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */}NextJs
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */} React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */} Tailwind
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {/* {tagItem} */}Kinde Auth
                  </span>
              </div>
            </div>
          </a>
        {/* ))} */}
      </div>
    </section>
  );
}
