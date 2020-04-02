import { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";

const Groups: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <>
        <p>
          <h1>그룹페이지</h1>
        </p>
        <Link href="groups/detail">
          <a>그룹 deatil</a>
        </Link>
      </>
      ;
    </Layout>
  );
};

export default Groups;
