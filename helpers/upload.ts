export const handleUpload = async (files: FileList) => {

    const formData = new FormData();
    const data = Array.from(files);
    data.map((el) => {
        formData.append("files", el);
    })


    fetch(
        'http://localhost:4000/uploads',
        {
            method: 'POST',
            body: formData,
        }
    )
        .then((response) => response.json())

}