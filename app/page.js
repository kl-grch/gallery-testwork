"use client";

import CardGallery from "@/components/cardGallery/CardGallery";
import "./pageHome.scss";
import Link from "next/link";
import { useGallery } from "@/hooks/useGallery";

export default function Home() {
  const { data } = useGallery();
  return (
    <main>
      <div className="gallery container">
        {!data ? (
          <div>loading</div>
        ) : (
          Object.keys(data).map((item, i) => {
            return (
              <Link key={i} href={`/${item}`}>
                <CardGallery
                  title={item}
                  bg={`/images/${item}/${data[item][0]}`}
                />
              </Link>
            );
          })
        )}
      </div>
    </main>
  );
}
