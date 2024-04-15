import Link from "next/link";
import PersistentDrawerLeft from "../components/Nav2";
import { unstable_noStore as noStore } from "next/cache";

export default async function ContactPage() {
  noStore();

  return (
    <div>
      <PersistentDrawerLeft>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <h1>External URL Page</h1>
          <div>
          <Link href="https://google.com/" passHref={true}>
            <h2 style={{textDecoration: "underline"}}>Google</h2>
          </Link>
          </div>
        </div>
      </PersistentDrawerLeft>
    </div>
  );
}
