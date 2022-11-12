export default async function upload(file: File): Promise<Response> {
  const data = new FormData();
  const url = process.env.REACT_APP_CLOUDINARY_URL;
  data.append("file", file);
  data.append(
    "upload_preset",
    process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET as string | Blob
  );

  return fetch(url as RequestInfo | URL, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
