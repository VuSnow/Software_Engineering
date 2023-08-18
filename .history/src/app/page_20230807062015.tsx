"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import BannerSlide from "@/components/BannerSlide/BannerSlide";
import NewProducts from "@/components/NewProducts/NewProducts";
import HomepageSearch from "@/components/HomepageSearch/HomepageSearch";
import Collection from "@/components/collections/Collection";
import HomepageService from "@/components/HomepageService/HomepageService";
import AppContext from "@/utils/Context";

export default function Home() {
  return (
    <AppContext>
      <BannerSlide />
      <HomepageSearch />
      <Collection />
      <NewProducts />
    </AppContext>
  );
}
