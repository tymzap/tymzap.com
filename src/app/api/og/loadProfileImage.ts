export async function loadProfileImage() {
  const imageUrl = new URL("../../../../public/profile.png", import.meta.url);

  const data = await fetch(imageUrl).then((response) => response.arrayBuffer());

  const base64String = arrayBufferToBase64(data);

  return `data:image/png;base64,${base64String}`;
}

function arrayBufferToBase64(arrayBuffer: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
}
