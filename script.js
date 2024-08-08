document.getElementById("generate-btn").addEventListener("click", () => {
  const style = document.getElementById("style").value;
  const shape = document.getElementById("shape").value;
  const quantity = document.getElementById("quantity").value;
  const prompt = document.getElementById("prompt").value;

  // Mock image generation
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = ""; // Clear previous images

  for (let i = 0; i < quantity; i++) {
    const img = document.createElement("img");
    img.src = `https://source.unsplash.com/random/400x400?${style},${shape}`;
    img.alt = `Generated ${style} ${shape}`;
    img.classList.add("rounded-lg", "shadow-md");
    img.onerror = () => {
      img.src = "https://via.placeholder.com/400?text=Image+not+available";
    };

    const downloadBtn = document.createElement("button");
    downloadBtn.innerText = "Download";
    downloadBtn.classList.add(
      "bg-blue-500",
      "text-white",
      "rounded-md",
      "py-2",
      "hover:bg-blue-600",
      "mt-2"
    );
    downloadBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = img.src;
      link.download = `generated-${style}-${shape}-${i + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    const imgWrapper = document.createElement("div");
    imgWrapper.appendChild(img);
    imgWrapper.appendChild(downloadBtn);

    imageContainer.appendChild(imgWrapper);
  }
});
