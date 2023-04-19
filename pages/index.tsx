import { useEffect, useState } from "react";

const API_KEY = `97254b47f45871505d334f0e8bd1b741`;

interface MovieProps {
  id: number;
  original_title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Array<MovieProps>>();
  useEffect(() => {
    // IIFE는 즉시 실행 함수이며 단 한번만 실행될 때 사용된다. 첫번째 괄호는 익명함수를, 두번째 괄호는 즉시 실행을 의미한다. 따라서 익명함수를 정의하고 즉시실행에
    // 불필요한 전역변수를 렉시컬 스코프에 저장하지 않게 된다.
    (async () => {
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      console.log(movies);
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
    {!movies && <h4>Loading...</h4>}
    {movies?.map((movie) => (
      <div className="movie" key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <h4>{movie.original_title}</h4>
      </div>
    ))}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px;
        gap: 20px;
      }
      .movie img {
        max-width: 100%;
        border-radius: 12px;
        transition: transform 0.2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      }
      .movie:hover img {
        transform: scale(1.05) translateY(-10px);
      }
      .movie h4 {
        font-size: 18px;
        text-align: center;
      }
    `}</style>
  </div>
  );
}
