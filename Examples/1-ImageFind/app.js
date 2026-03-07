// Seçiciler
const searchInput = document.querySelector("input");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageList = document.querySelector("#imageList");

// Unsplash Bilgileri (Buraya kendi key'ini yapıştırmalısın)
const auth = "Client-ID oKGlB82aAucbUbG2L4kjNXIwyBQqBcNegqkbFfz9Tdg";

searchButton.addEventListener("click", () => {
  const value = searchInput.value.trim();
  if (value !== "") {
    searchImages(value);
  }
});

async function searchImages(term) {
  imageList.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${term}&per_page=20`,
      {
        method: "GET",
        headers: {
          Authorization: auth,
        },
      },
    );

    const data = await response.json();

    // Gelen resimleri ekrana bas
    data.results.forEach((image) => {
      addImageToUI(image.urls.small, image.alt_description);
    });
  } catch (error) {
    console.error("Resimler getirilirken hata oluştu:", error);
  }
}

function addImageToUI(url, description) {
  const col = document.createElement("div");
  col.className = "col";

  col.innerHTML = `
        <div class="card h-100 shadow border-success border-opacity-25 bg-white">
            <img src="${url}" class="card-img-top" alt="${description}" 
                 style="height: 200px; object-fit: cover;">
            
            <div class="card-body p-3 d-flex flex-column justify-content-between">
                <div>
                    <p class="card-text text-muted small" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        ${description || "Bu harika görsel için bir açıklama bulunmuyor."}
                    </p>
                </div>
                
                <div class="mt-3 pt-2 border-top border-light">
                    <button class="btn btn-sm btn-outline-success w-100">Detayları Gör</button>
                </div>
            </div>
        </div>
    `;

  imageList.appendChild(col);
}

// Temizleme işlemi
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  imageList.innerHTML = "";
});
