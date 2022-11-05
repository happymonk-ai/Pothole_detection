export const formatType = (type: string) => {
    if (type) {
        return type[0]?.concat(type.slice(1)?.toLowerCase());
    }
};



const images = ["./output/save_image0.jpg",
    "./output/save_image1.jpg",
    "./output/save_image2.jpg",
    "./output/save_image3.jpg"
];
export const generateRandomImages = () => {
    return images.sort(() => Math.random() - 0.5);
};


generateRandomImages();