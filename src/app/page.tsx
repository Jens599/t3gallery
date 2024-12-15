import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a62d167c-634d-45d3-94f9-d58bd2724906-md08f.jpg",
  "https://utfs.io/f/61242af3-e960-4973-a68f-ad2b93ec6a40-3doopp.jpg",
  "https://utfs.io/f/ef5be794-860a-4829-91c8-ea8eaaf55daa-3eqd1a.png",
  "https://utfs.io/f/6d77363a-48e5-4126-9b02-9175b6bd2d36-ngql0.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <div className="flex flex-wrap gap-4">
      {[...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}
