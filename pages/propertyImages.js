const fs = require('fs');
const path = require('path');

class PropertyImages {
  constructor(page) {
    this.page = page;
    this.coverImageInput = page.locator("//input[@id='coverImage']");
    this.apiKey = "FsWQUvYYx6i4YCdP9O5toE4iSbfcHVPqVq99Z1SI4MMbaBtapz3gaYwX"; // your Pexels API key
    this.interiorImageInput = page.locator("(//input[@id='images'])[1]");

    this.downloadedImages = new Set();
  }

 async ensureTempDir() {
    const tempDir = path.join(__dirname, "../temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    return tempDir;
  }

  async downloadRandomHouseImage() {
    // ✅ Request random exterior/commercial house/building images from Pexels
    const randomPage = Math.floor(Math.random() * 100) + 1; // ensures unique result each time

    // Refined queries: commercial, exterior houses, buildings
    const queries = [
        "modern house exterior",
        "luxury villa exterior",
        "commercial building",
        "office building exterior",
        "apartment building exterior",
        "beautiful house front",
        "mansion exterior"
    ];

    const randomQuery = queries[Math.floor(Math.random() * queries.length)];
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(randomQuery)}&per_page=1&page=${randomPage}`;

    const res = await this.page.request.fetch(url, {
        headers: { Authorization: this.apiKey },
        timeout: 15000,
    });

    if (!res.ok()) throw new Error(`Failed to fetch image from Pexels: ${url}`);
    const data = await res.json();

    if (!data.photos || data.photos.length === 0) {
        throw new Error("No house/building images found from Pexels API");
    }

    const photo = data.photos[0];
    const imageUrl = photo.src.original; // high quality
    const tempDir = await this.ensureTempDir();
    const filePath = path.join(tempDir, `house_${Date.now()}.jpg`);

    const imageRes = await this.page.request.fetch(imageUrl, { timeout: 20000 });
    const buffer = await imageRes.body();
    await fs.promises.writeFile(filePath, buffer);

    console.log("House/building image downloaded:", filePath);
    return filePath;
}

  async uploadRandomCoverImage() {
    const randomImage = await this.downloadRandomHouseImage();
    console.log("Uploading image:", randomImage);
    await this.coverImageInput.setInputFiles(randomImage);
  }


 async downloadRandomInteriorImage() {
  const maxAttempts = 10;
  let attempt = 0;

  // Define interior-specific queries
  const queries = ["living room", "bedroom", "kitchen", "balcony", "swimming pool"];

  while (attempt < maxAttempts) {
    attempt++;
    const randomQuery = queries[Math.floor(Math.random() * queries.length)];
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(randomQuery)}&per_page=1&page=${randomPage}`;

    const res = await this.page.request.fetch(url, {
      headers: { Authorization: this.apiKey },
      timeout: 15000,
    });

    if (!res.ok) continue;

    const data = await res.json();
    if (!data.photos || data.photos.length === 0) continue;

    const photo = data.photos[0];
    const imageUrl = photo.src.original;

    if (this.downloadedImages.has(imageUrl)) continue;

    const tempDir = await this.ensureTempDir();
    const filePath = path.join(tempDir, `interior_${Date.now()}_${Math.floor(Math.random() * 1000)}.jpg`);

    const imageRes = await this.page.request.fetch(imageUrl, { timeout: 30000 });
    const buffer = await imageRes.body();
    await fs.promises.writeFile(filePath, buffer);

    this.downloadedImages.add(imageUrl);
    return filePath;
  }

  throw new Error("Failed to download a unique interior image after multiple attempts");
}

// Updated interior upload function
async uploadRandomInteriorImages() {
  const numberOfImages = Math.floor(Math.random() * 4) + 3; // 3-6 images

  // Download interior images in parallel
  const files = await Promise.all(
    Array.from({ length: numberOfImages }, () => this.downloadRandomInteriorImage())
  );

  console.log(`Uploading ${files.length} interior images:`, files);

  await this.interiorImageInput.waitFor({ state: 'visible', timeout: 15000 });
  await this.interiorImageInput.setInputFiles(files);
}


}

module.exports = { PropertyImages };
