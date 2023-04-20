import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

type MovieDetailParams = [string, string] | [];

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params|| ([] as MovieDetailParams);

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
    return {
        props: {
            params
        }
    }
}
