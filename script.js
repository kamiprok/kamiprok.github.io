let currentIndex = 0;
const albumsPerPage = 5;
let wishlistView = 'carousel';
let collectionView = 'carousel';

//{ title: "", artist: "", year: , genre: "", cover: "" }

const ownedAlbums = [
  { title: "Metallica (The Black Album)", artist: "Metallica", year: 1991, genre: "Rock", cover: "https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg" },
  { title: "Nevermind", artist: "Nirvana", year: 1991, genre: "Grunge", cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg" },
  { title: "The Best of Pink Floyd: A Foot in the Door ", artist: "Pink Floyd", year: 2011, genre: "Progressive Rock", cover: "https://upload.wikimedia.org/wikipedia/en/3/38/AFootInTheDoorPinkFloyd.jpg" },
  { title: "Money for Nothing", artist: "Dire Straits", year: 1985, genre: "Pop Rock", cover: "https://upload.wikimedia.org/wikipedia/en/8/8c/Money_for_Nothing_single.JPG" },
  { title: "Greatest Hits", artist: "Queen", year: 1981, genre: "Rock", cover: "https://upload.wikimedia.org/wikipedia/en/0/02/Queen_Greatest_Hits.png" },
  { title: "Greatest Hits II", artist: "Queen", year: 1991, genre: "Rock", cover: "https://upload.wikimedia.org/wikipedia/en/3/38/Queen_-_Greatest_Hits_2.png" },
  { title: "Heart Of Glass I Inne Przeboje", artist: "Various", year: 1979, genre: "Pop", cover: "https://i.discogs.com/TdqmQrvuMsTK0k09kUCo7WChVfEcb-hmif_tohFXDo0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0MDEz/MDgtMTQxODMzMjY3/My02NDk5LmpwZWc.jpeg" },
  { title: "Bad", artist: "Michael Jackson", year: 1987, genre: "Pop", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png" },
  { title: "Dark Side of the Moon", artist: "Pink Floyd", year: 1973, genre: "Progressive Rock", cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" },
  { title: "True Blue", artist: "Madonna", year: 1986, genre: "Dance-Pop", cover: "https://upload.wikimedia.org/wikipedia/en/e/e0/Madonna_-_True_Blue_%28album_cover%29.png" },
  { title: "Greatest Hits", artist: "Shakin' Stevens", year: 1984, genre: "Rock and Roll", cover: "https://upload.wikimedia.org/wikipedia/en/c/c5/Shakin%27_Stevens_Greatest_Hits_1984.jpg" },
  { title: "Faith", artist: "George Michael", year: 1987, genre: "Pop", cover: "https://upload.wikimedia.org/wikipedia/en/9/9a/George_Michael_-_Faith.png" },
  { title: "Rumours", artist: "Fleetwood Mac", year: 1977, genre: "Rock", cover: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG" }
];
const wishlistAlbums = [
  { title: "The Rise and Fall of Ziggy Stardust", artist: "David Bowie", year: 1972, genre: "Glam Rock", cover: "https://upload.wikimedia.org/wikipedia/en/0/01/ZiggyStardust.jpg" },
  { title: "Led Zeppelin IV", artist: "Led Zeppelin", year: 1971, genre: "Hard Rock", cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg" },
  { title: "Random Access Memories", artist: "Daft Punk", year: 2013, genre: "Electronic", cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png" },
  { title: "Hotel California", artist: "Eagles", year: 1976, genre: "Rock", cover: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg" },
  { title: "Thriller", artist: "Michael Jackson", year: 1982, genre: "Pop", cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png" },
  { title: "Back in Black", artist: "AC/DC", year: 1980, genre: "Hard Rock", cover: "https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png" },
  { title: "The Wall", artist: "Pink Floyd", year: 1979, genre: "Rock Opera", cover: "https://upload.wikimedia.org/wikipedia/commons/b/b1/The_Wall_Cover.svg" }
];


function updateCarousel() {
  const container = document.getElementById("owned-albums");
  const listContainer = document.getElementById("owned-list");
  const query = document.getElementById("owned-search")?.value.toLowerCase() || "";

  const isList = collectionView === 'list';
  const isGrid = collectionView === 'grid';
  const filtered = ownedAlbums.filter(album => album.title.toLowerCase().includes(query) || album.artist.toLowerCase().includes(query));

  if (currentIndex > filtered.length - albumsPerPage) {
    currentIndex = Math.max(filtered.length - albumsPerPage, 0);
  }

  container.style.opacity = 0;
  container.style.transition = 'opacity 0.3s ease';
  setTimeout(() => {
    container.innerHTML = "";
    listContainer.innerHTML = "";

  filtered.forEach((album, i) => {
    if (isList) {
      const row = document.createElement("div");
      row.className = "flex gap-4 mb-4 items-center";
      row.innerHTML = `
        <img src="${album.cover}" class="w-24 h-24 object-cover rounded" />
        <div>
          <h2 class="text-xl font-semibold">${album.title}</h2>
          <p class="text-sm text-gray-400">${album.artist}</p>
          <p class="text-sm text-gray-400">${album.year}</p>
          <p class="text-sm text-gray-400">${album.genre}</p>
        </div>
      `;
      listContainer.appendChild(row);
    } else if (isGrid || (i >= currentIndex && i < currentIndex + albumsPerPage)) {
      const card = document.createElement("div");
      card.className = "album-card bg-gray-800 rounded-xl shadow-lg overflow-hidden transform scale-95 opacity-0 transition-all duration-500";
      card.innerHTML = `
        <div class="w-full h-80 overflow-hidden flex items-center justify-center bg-black">
          <img src="${album.cover}" class="max-h-full max-w-full object-contain" />
        </div>
        <div class="p-4">
          <h2 title="${album.title}" class="text-xl font-semibold truncate h-6">${album.title}</h2>
          <p class="text-sm text-gray-400">${album.artist}</p>
          <p class="text-sm text-gray-400">${album.year}</p>
          <p class="text-sm text-gray-400">${album.genre}</p>
        </div>
      `;
      container.appendChild(card);
              requestAnimationFrame(() => {
          card.classList.remove("scale-95", "opacity-0");
          card.classList.add("scale-100", "opacity-100");
        });
    }
  });

  container.classList.add("transition-opacity", "duration-500");
  container.style.opacity = isList ? "0" : "1";
  container.style.display = isList ? "none" : "grid";
  listContainer.classList.add("transition-opacity", "duration-500");
  listContainer.style.opacity = isList ? "1" : "0";
  listContainer.style.display = isList ? "block" : "none";
  }, 150);
}

function nextAlbums() {
  const isWishlist = document.getElementById("wishlist").classList.contains("visible-section");
  const albums = isWishlist ? wishlistAlbums : ownedAlbums;
  const query = document.getElementById(isWishlist ? "wishlist-search" : "owned-search")?.value.toLowerCase() || "";
  const filtered = albums.filter(album => album.title.toLowerCase().includes(query) || album.artist.toLowerCase().includes(query));
  const maxIndex = Math.max(filtered.length - albumsPerPage, 0);
  currentIndex = Math.min(currentIndex + albumsPerPage, maxIndex);
  updateCarousel();
  updateWishlist();
}

function prevAlbums() {
  currentIndex = Math.max(currentIndex - albumsPerPage, 0);
  updateCarousel();
  updateWishlist();
}

function showSection(id) {
  document.getElementById("info")?.classList.add("hidden-section");
  document.getElementById("owned").classList.add("hidden-section");
  document.getElementById("wishlist").classList.add("hidden-section");
  document.getElementById("owned").classList.remove("visible-section");
  document.getElementById("wishlist").classList.remove("visible-section");

  document.getElementById(id).classList.remove("hidden-section");
  document.getElementById("info")?.classList.remove("visible-section");
  document.getElementById(id).classList.add("visible-section");

  highlightNav(id);

  const carouselNav = document.getElementById("carousel-nav");
  const ownedCarouselNav = document.getElementById("owned-carousel-nav");
  if (id === "wishlist") {
    carouselNav.style.opacity = wishlistView === "carousel" ? "1" : "0";
    ownedCarouselNav.style.opacity = "0";
  } else if (id === "owned") {
    ownedCarouselNav.style.opacity = collectionView === "carousel" ? "1" : "0";
    carouselNav.style.opacity = "0";
  } else {
    carouselNav.style.opacity = "0";
    ownedCarouselNav.style.opacity = "0";
  }
  updateViewButtons();
}

function highlightNav(id) {
  document.getElementById("navOwned").classList.remove("active");
  document.getElementById("navWishlist").classList.remove("active");
  document.getElementById("navInfo").classList.remove("active");
  if (id === "owned") {
    document.getElementById("navOwned").classList.add("active");
  } else if (id === "wishlist") {
    document.getElementById("navWishlist").classList.add("active");
  } else if (id === "info") {
    document.getElementById("navInfo").classList.add("active");
  }
}

function updateViewButtons() {
  const isWishlist = document.getElementById("wishlist").classList.contains("visible-section");
  const mode = isWishlist ? wishlistView : collectionView;

  const gridBtn = document.getElementById(isWishlist ? "wishlistGridBtn" : "ownedGridBtn");
  const carouselBtn = document.getElementById(isWishlist ? "wishlistCarouselBtn" : "ownedCarouselBtn");
  const listBtn = document.getElementById(isWishlist ? "wishlistListBtn" : "ownedListBtn");

  document.querySelectorAll(".view-toggle button").forEach(btn => btn.classList.remove("active"));

  if (mode === 'list') {
    listBtn.classList.add("active");
  } else if (mode === 'grid') {
    gridBtn.classList.add("active");
  } else {
    carouselBtn.classList.add("active");
  }
  
}

function updateWishlist() {
  const container = document.getElementById("wishlist-albums");
  const listContainer = document.getElementById("wishlist-list");
  const query = document.getElementById("wishlist-search")?.value.toLowerCase() || "";
  container.innerHTML = "";
  listContainer.innerHTML = "";

  const isList = wishlistView === 'list';
  const isGrid = wishlistView === 'grid';

  wishlistAlbums.forEach((album, i) => {
    const match = album.title.toLowerCase().includes(query) || album.artist.toLowerCase().includes(query);
    if (!match) return;

    if (isList) {
      const row = document.createElement("div");
      row.className = "flex gap-4 mb-4 items-center";
      row.innerHTML = `
        <img src="${album.cover}" class="w-24 h-24 object-cover rounded" />
        <div>
          <h2 class="text-xl font-semibold">${album.title}</h2>
          <p class="text-sm text-gray-400">${album.artist}</p>
          <p class="text-sm text-gray-400">${album.year}</p>
          <p class="text-sm text-gray-400">${album.genre}</p>
        </div>
      `;
      listContainer.appendChild(row);
    } else if (isGrid || (i >= currentIndex && i < currentIndex + albumsPerPage)) {
      const card = document.createElement("div");
      card.className = "album-card bg-gray-800 rounded-xl shadow-lg overflow-hidden";
      card.innerHTML = `
        <img src="${album.cover}" class="w-full h-80 object-cover" />
        <div class="p-4">
          <h2 title="${album.title}" class="text-xl font-semibold truncate h-6">${album.title}</h2>
          <p class="text-sm text-gray-400">${album.artist} · ${album.year} · ${album.genre}</p>
        </div>
      `;
      container.appendChild(card);
    }
  });

  container.style.display = isList ? "none" : "grid";
  listContainer.style.display = isList ? "block" : "none";
}

function setViewMode(mode) {
  const isWishlist = document.getElementById("wishlist").classList.contains("visible-section");

  if (isWishlist) {
    wishlistView = mode;
    const nav = document.getElementById("carousel-nav");
    if (nav) nav.style.opacity = mode === 'carousel' ? "1" : "0";
  } else {
    collectionView = mode;
    const nav = document.getElementById("owned-carousel-nav");
    if (nav) nav.style.opacity = mode === 'carousel' ? "1" : "0";
  }

  updateViewButtons();
  updateCarousel();
  updateWishlist();
}

window.onload = () => {
  document.getElementById("carousel-nav").style.opacity = "1";
  document.getElementById("owned-carousel-nav").style.opacity = "0";
  updateCarousel();
  updateWishlist();
  updateViewButtons();
  highlightNav("wishlist");
  showSection("wishlist");
};
