import Profile from "./profile";
export default function Gallery() {
  return (
    <section id="gallery" className="flex flex-col items-center gap-4">
      <h1>Cientistas Incríveis</h1>
      <ul className="flex flex-row items-center gap-4">
        <ol>
          <Profile />
        </ol>
        <ol>
          <Profile />
        </ol>
        <ol>
          <Profile />
        </ol>
      </ul>
    </section>
  );
}
