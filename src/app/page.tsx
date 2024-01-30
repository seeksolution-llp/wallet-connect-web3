import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import WalletConnect from "@/components/WalletConnect";

export default function Home() {
  return (
    <Fragment>
      <WalletConnect/>
    </Fragment>
  );
}
