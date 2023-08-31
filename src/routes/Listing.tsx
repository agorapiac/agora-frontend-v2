import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Listing() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  return (
    <div className="flex justify-center align-center min-h-screen">
      <div className="w-1/2 m-10 rounded-3xl bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg">
        <h1 className="p-3 text-3xl text-center font-semibold">
          Listing Title
        </h1>

        <div className="image-gallery-container px-6 py-4">
          <ReactImageGallery
            items={images}
            showPlayButton={false}
            showBullets={true}
          />
        </div>
        <p className="listing-description px-6 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio
          dolores necessitatibus possimus facilis commodi laudantium accusamus
          sunt labore! Sit doloribus deleniti dolorum veritatis, ipsam sint at
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab
          corporis cumque a iste possimus distinctio sit veritatis sunt est.
          Ratione, illum inventore dolores ipsum perferendis consectetur,
          asperiores labore ipsa deleniti nostrum dolor doloremque, amet
          accusamus soluta ex? Nulla vitae impedit inventore ratione non
          molestias nihil similique, exercitationem quaerat unde beatae, commodi
          ab illo, voluptates recusandae aut aspernatur dolorem totam magnam
          natus id? Autem, consectetur ratione! Amet voluptatibus eos modi ipsa
          eveniet? Quo recusandae aliquam ex numquam voluptatum id facilis at?
          Tenetur dolores, in blanditiis sapiente temporibus incidunt? Nam fugit
          reiciendis fugiat assumenda molestias quasi officiis impedit nulla
          odit laudantium.2
        </p>
      </div>
    </div>
  );
}

export default Listing;
